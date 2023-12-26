import { Session } from "@/session/models/implementation/session.model";
import { ApiClientInterface } from "../../models/api-client/ApiClient.interface";
import UsersApiClient from '../../user/api-client/live'
import SessionApiClient from "@/session/models/implementation/session.url.model";

const apiLiveClient: ApiClientInterface = {
    users: UsersApiClient,
    sessions: SessionApiClient
}

export default apiLiveClient                                                                                                             