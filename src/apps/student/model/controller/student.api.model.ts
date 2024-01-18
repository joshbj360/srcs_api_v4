import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client";
import { StudentApiClientInterface } from "../interface/student.api.interface";
import { StudentInterface } from "../interface/student.interface";
import { StudentUrlInterface } from "../interface/student.urls.interface";

export class StudentApiModel implements StudentApiClientInterface {
    private readonly urls!: StudentUrlInterface

    constructor(options: {urls:StudentUrlInterface}) {
        this.urls = options.urls
    }

    fetchStudents(): Promise<StudentInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchStudents,
            requiresToken: true,
            requestLog: '---------fetch students'
        }
        return httpClient.request<StudentInterface[]>(getParameters)
    }
    
}