import { UserApiClientUrlsInterface } from './user.ApiClient.Urls.interface'
import { UserApiClientInterface } from './userApiClient.interface'
import { UserInterface } from '../user.interface'

import { httpClient, HttpRequestParamsInterface, HttpRequestType } from '../../../models/http-client'
import { IToken } from '../token.interface'
export class UserApiClientModel implements UserApiClientInterface {
    private readonly urls!: UserApiClientUrlsInterface
    private readonly mockDelay: number = 0

    constructor(options: {
        urls: UserApiClientUrlsInterface,
        mockDelay?: number
    }) {
        this.urls = options.urls
        if (options.mockDelay) {
            this.mockDelay = options.mockDelay
        }
    }

    fetchUsers(): Promise<UserInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchUsers,
            requiresToken: false,
        }
        return httpClient.request<UserInterface[]>(getParameters)
    }

    addUser(username: string, password: string, firstName: string, lastName: string): Promise<any> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addUser,
            requiresToken: false,
            payload: { username, password, firstName, lastName }
        }
        return httpClient.request<any>(getParameters)
    }

    loginUser(username:string, password:string): Promise<IToken> {
        console.log(HttpRequestType.post + '----------LOGIN USER')
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.loginUser,
            requiresToken: false,
            payload: {
                username,
                password
            }
        }
        return httpClient.request<IToken>(getParameters)
    }
}