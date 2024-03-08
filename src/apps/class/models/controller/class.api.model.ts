import { HttpRequestParamsInterface } from "@/models/http-client/models/HttpRequestParams.interface";
import { ClassApiClientInterface } from "../interface/class.api.interface";
import { ClassInterface } from "../interface/class.interface";
import { ClassUrlsInterface } from "../interface/class.urls.interface";
import { HttpRequestType, httpClient } from "@/models/http-client";
import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface";

export class classApiClientModel implements ClassApiClientInterface {
    private readonly urls!: ClassUrlsInterface
    
    constructor(options: { urls: ClassUrlsInterface }) {
        this.urls = options.urls
    }
    fetchClasses(schoolID: number, sessionID: number): Promise<ClassInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchClasses(schoolID, sessionID),
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
    fetchClassSubjects(schoolID: number, sessionID: number, classID: number): Promise<SubjectInterface[]> {
        const getParams: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.listAddClassSubjects(schoolID, sessionID, classID),
            requiresToken: false,
            requestLog: '--------get class subjects'
        }
        return httpClient.request<SubjectInterface[]>(getParams)
    }
    addClassSubjects(schoolID: number, sessionID: number, classID: number, subjects: SubjectInterface[]): Promise<SubjectInterface[]> {
        const getParams: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.listAddClassSubjects(schoolID, sessionID, classID),
            payload: subjects,
            requiresToken: false,
            requestLog: '--------add class subjects'
        }
        return httpClient.request<SubjectInterface[]>(getParams)
    }

    
}