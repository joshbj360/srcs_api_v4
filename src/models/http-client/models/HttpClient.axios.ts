import axios, {
    AxiosRequestConfig,
    AxiosResponse
} from 'axios'

import { HttpRequestType } from './HttpRequestType.enum';
import { HttpClientInterface } from './HttpClient.interface';
import { HttpRequestParamsInterface } from './HttpRequestParams.interface';


/**
 * @name HttpClientAxios
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */


export class HttpClientAxios implements HttpClientInterface {
   
    constructor() {

    }
  async request<R, P = void>(parameters: HttpRequestParamsInterface): Promise<R> {

        const {requestType, url, requiresToken, payload, requestLog } = parameters

        const fullUrl = url

        const options: AxiosRequestConfig = {
            headers: {}
        }

        if (requiresToken && options.headers) {
            // try get token from cookie
            let tokenObject = {refresh: '', access: ''}

            try {
                if (document.cookie.includes('token=')) {
                    const cookieString = document.cookie.split('; ').find(row => row.startsWith('token='));
                    const token = cookieString ? cookieString.split('=')[1] : null;
                    tokenObject = token ? JSON.parse(token) : null;
                    // token = JSON.parse(document.cookie.split('token=')[1].split(';')[0])
                }
                //Set Authorization Header
                options.headers = {
                    Authorization: 'Bearer ' + tokenObject.access
                }
            } catch (e) {
                console.log(e)
            }
        }

        let result!: R

        // try {
            switch(requestType) {
                case HttpRequestType.get: {
                    const response = await axios.get(fullUrl, options)
                    result = response?.data as R
                    console.log(requestLog)
                    break
                }
                case HttpRequestType.post: {
                    // console.log(options.method, fullUrl)
                    const response = await axios.post(fullUrl, payload, options)
                    result = response?.data as R
                    console.log(requestLog)
                    break
                }
                case HttpRequestType.put: {
                    const response = await axios.put(fullUrl, payload, options)
                    result = response?.data as R
                    console.log(requestLog)
                    break
                }
                case HttpRequestType.delete: {
                    const response = await axios.delete(fullUrl, options)
                    result = response?.data as R
                    console.log(requestLog)
                    break
                }

                default: {
                    console.warn("HTTPClient: Invalid requestType argument or request type not implemented")
                }
            }
        // } catch (e) {
        //     throw Error("HttpClient Exception")
        // }

        return result
    }
}