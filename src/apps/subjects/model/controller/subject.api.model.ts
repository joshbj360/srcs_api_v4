import { SubjectApiClientInterface } from "../interface/subject.api.interface";
import { SubjectInterface } from "../interface/subject.interface";
import { SubjectUrlInterface } from "../interface/subject.urls.interface";
import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client";

export class SubjectApiModel implements SubjectApiClientInterface {
    private readonly urls!: SubjectUrlInterface 

    constructor(options: {urls: SubjectUrlInterface}) {
        this.urls = options.urls
    }

    fetchSubjects(): Promise<SubjectInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSubjects,
            requiresToken: false
        }
        return httpClient.request<SubjectInterface[]>(getParameters)
    }
}