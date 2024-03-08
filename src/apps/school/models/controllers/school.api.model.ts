import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client"
import { SchoolApiClientInterface } from "../interface/school.api.interface"
import { SchoolInterface } from "../interface/school.interface"
import { SchoolUrlInterface } from "../interface/school.urls.interface"

export class SchoolApiModel implements SchoolApiClientInterface {
    private readonly urls!: SchoolUrlInterface 

    constructor(options: {urls: SchoolUrlInterface}){
        this.urls = options.urls
    }
    fetchSchools(): Promise<SchoolInterface[]> {
        const getParameters:HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSchools,
            requiresToken: false,
            requestLog: '----------fetch school information'
        }
        return httpClient.request<SchoolInterface[]>(getParameters)
    }
    updateSchool(school: SchoolInterface): Promise<SchoolInterface> {
        const getParameters:HttpRequestParamsInterface = {
            requestType: HttpRequestType.put,
            url: this.urls.updateSchool(school.id),
            requiresToken: false,
            payload: school,
            requestLog: '----------update school information'
        }
        return httpClient.request<SchoolInterface>(getParameters)
    }
    addSchool(): Promise<SchoolInterface> {
        const getParameters:HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addSchool,
            requiresToken: false,
            requestLog: '----------add new school information'
        }
        return httpClient.request<SchoolInterface>(getParameters)
    }

}