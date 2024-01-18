import { SubjectApiClientInterface } from "../interface/subject.api.interface";
import { SubjectUrlInterface } from "../interface/subject.urls.interface";
import { SubjectApiModel } from "./subject.api.model";

const urls: SubjectUrlInterface = {
    fetchSubjects: 'http://127.0.0.1:8000/en/api/v4/subject/'
}

const SubjectApiClient: SubjectApiClientInterface = new SubjectApiModel({urls})

export default SubjectApiClient 