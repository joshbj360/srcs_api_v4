import { sessionApiClientInterface } from "@/session/models/interface/session.api.interface";
import { UserApiClientInterface } from "../../user/models/api-clients/userApiClient.interface";

export interface ApiClientInterface {
    users: UserApiClientInterface
    session: sessionApiClientInterface
}