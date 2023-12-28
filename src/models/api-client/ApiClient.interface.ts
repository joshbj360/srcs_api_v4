import { sessionApiClientInterface } from "@/session/models/interface/session.api.interface";
import { UserApiClientInterface } from "../../user/models/api-clients/userApiClient.interface";
import { ClassApiClientInterface } from "@/apps/class/models/definition/class.api.interface";

export interface ApiClientInterface {
    users: UserApiClientInterface
    sessions: sessionApiClientInterface
    classes: ClassApiClientInterface
}