import { ApiClientInterface } from "../../models/api-client/ApiClient.interface";
import SessionApiClient from "@/apps/session/models/implementation/session.url.model";
import classApiClient from "@/apps/class/models/controller/class.urls.model";
import SubjectApiClient from "@/apps/subjects/model/controller/subject.url.model";
import UsersApiClient from "@/apps/user/api-client/mock";

const apiMockClient: ApiClientInterface= {
    sessions: SessionApiClient,
    classes: classApiClient,
    subjects: SubjectApiClient,
    users: UsersApiClient
}

export default apiMockClient