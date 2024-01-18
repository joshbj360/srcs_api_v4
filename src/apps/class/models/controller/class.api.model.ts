import { HttpRequestParamsInterface } from "@/models/http-client/models/HttpRequestParams.interface";
import { ClassApiClientInterface } from "../interface/class.api.interface";
import { ClassInterface } from "../interface/class.interface";
import { ClassUrlsInterface } from "../interface/class.urls.interface";
import { HttpRequestType, httpClient } from "@/models/http-client";

export class classApiClientModel implements ClassApiClientInterface {
    private readonly urls!: ClassUrlsInterface
    
    constructor(options: { urls: ClassUrlsInterface }) {
        this.urls = options.urls
    }
    fetchClasses(): Promise<ClassInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchClasses,
            requiresToken: true,
            requestLog: '---------fetch class'
        }
        return httpClient.request<ClassInterface[]>(getParameters)
    }
    addClass(Class: ClassInterface): Promise<ClassInterface[]> {
        const { ...rest } = Class
        const getParams: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addClass,
            requiresToken: true,
            payload: rest,
            requestLog: '--------add class'
        }
        return httpClient.request<ClassInterface[]>(getParams)
    }

    
}