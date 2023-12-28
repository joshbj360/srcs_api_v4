import classApiClient from "@/apps/class/models/implementation/class.urls.model";
import { ApiClientInterface } from "../../models/api-client/ApiClient.interface";
import UsersApiClient from '../../user/api-client/live'
import SessionApiClient from "@/session/models/implementation/session.url.model";

const apiLiveClient: ApiClientInterface = {
    users: UsersApiClient,
    sessions: SessionApiClient,
    classes: classApiClient
}

export default apiLiveClient                                                                                                             