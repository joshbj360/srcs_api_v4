import { sessionApiClientInterface } from "@/apps/session/models/interface/session.api.interface";
import { UserApiClientInterface } from "@/apps/user/models/api-clients/userApiClient.interface";
import { ClassApiClientInterface } from "@/apps/class/models/interface/class.api.interface";
import { SubjectApiClientInterface } from "@/apps/subjects/model/interface/subject.api.interface";
import { StudentApiClientInterface } from "@/apps/student/model/interface/student.api.interface";

export interface ApiClientInterface {
    users: UserApiClientInterface
    sessions: sessionApiClientInterface
    classes: ClassApiClientInterface
    subjects: SubjectApiClientInterface
    students: StudentApiClientInterface
}