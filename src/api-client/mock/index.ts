import { ApiClientInterface } from "../../models/api-client/ApiClient.interface";
import UsersApiClient from "../../user/api-client/mock";

const apiMockClient: ApiClientInterface= {
    users: UsersApiClient
}

export default apiMockClient