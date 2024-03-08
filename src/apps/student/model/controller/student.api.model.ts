import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client";
import { StudentApiClientInterface } from "../interface/student.api.interface";
import { StudentInterface } from "../interface/student.interface";
import { StudentUrlInterface } from "../interface/student.urls.interface";
import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface";

export class StudentApiModel implements StudentApiClientInterface {
    private readonly urls!: StudentUrlInterface

    constructor(options: {urls:StudentUrlInterface}) {
        this.urls = options.urls
    }

    fetchStudents(schoolID: number, sessionID: number): Promise<StudentInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchStudents(schoolID, sessionID),
            requiresToken: true,
            requestLog: '---------fetch students'
        }
        return httpClient.request<StudentInterface[]>(getParameters)
    }
    fetchStudentsByClass(schoolID: number, sessionID: number, classID: number): Promise<StudentInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchStudentsByClass(schoolID, sessionID, classID),
            requiresToken: true,
            requestLog: '---------fetch students by class'
        }
        return httpClient.request<StudentInterface[]>(getParameters)
    }
    addStudent(schoolID: number, sessionID: number, student: StudentInterface): Promise<StudentInterface> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addStudent(schoolID, sessionID),
            requiresToken: true,
            payload: student,
            requestLog: '---------add student'
        }
        return httpClient.request<StudentInterface>(getParameters)
    }
    updateStudent(schoolID: number, sessionID: number, student: StudentInterface): Promise<StudentInterface> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.put,
            url: this.urls.updateStudent(schoolID, sessionID, student.id),
            requiresToken: true,
            payload: student,
            requestLog: '---------update student'
        }
        return httpClient.request<StudentInterface>(getParameters)
    }
    deleteStudent(schoolID: number, sessionID: number, studentID: number): Promise<void> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.delete,
            url: this.urls.deleteStudent(schoolID, sessionID, studentID),
            requiresToken: true,
            requestLog: '---------delete student'
        }
        return httpClient.request<void>(getParameters)
    }
    fetchStudentSubjects(schoolID: number, sessionID: number, studentID: number): Promise<SubjectInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchStudentSubjects(schoolID, sessionID, studentID),
            requiresToken: true,
            requestLog: '---------get student subjects'
        }
        return httpClient.request<SubjectInterface[]>(getParameters)
    }
    addStudentSubjects(schoolID: number, sessionID: number, studentID: number, subjects: SubjectInterface[]): Promise<SubjectInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addStudentSubjects(schoolID, sessionID, studentID),
            payload: subjects,
            requiresToken: true,
            requestLog: '---------add student subjects'
        }
        return httpClient.request<SubjectInterface[]>(getParameters)
    }
}