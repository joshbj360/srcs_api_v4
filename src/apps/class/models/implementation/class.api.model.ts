import { HttpRequestParamsInterface } from "@/models/http-client/models/HttpRequestParams.interface";
import { ClassApiClientInterface } from "../definition/class.api.interface";
import { ClassInterface } from "../definition/class.interface";
import { ClassUrlsInterface } from "../definition/class.urls.interface";
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
            requiresToken: true
        }
        return httpClient.request<ClassInterface[]>(getParameters)
    }
    addClass(Class: ClassInterface): Promise<void> {
        const { ...rest } = Class
        const getParams: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addClass,
            requiresToken: true,
            payload: rest
        }
        return httpClient.request<void>(getParams)
    }

    
}