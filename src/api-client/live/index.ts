import classApiClient from "@/apps/class/models/controller/class.urls.model";
import { ApiClientInterface } from "../../models/api-client/ApiClient.interface";
import UsersApiClient from '@/apps/user/api-client/live'
import SessionApiClient from "@/apps/session/models/implementation/session.url.model";
import SubjectApiClient from "@/apps/subjects/model/controller/subject.url.model";
import StudentApiClient from "@/apps/student/model/controller/student.urls.model";
import SchoolApiClient from "@/apps/school/models/controllers/school.url.models";

const apiLiveClient: ApiClientInterface = {
    users: UsersApiClient,
    sessions: SessionApiClient,
    classes: classApiClient,
    subjects: SubjectApiClient,
    students: StudentApiClient,
    schools: SchoolApiClient
}

export default apiLiveClient