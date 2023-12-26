import { ApiClientInterface } from "../models/api-client/ApiClient.interface"
import apiLiveClient from "./live"
import apiMockClient from "./mock"

let env: string = 'live'
if (import.meta.env && import.meta.env.VITE_API_CLIENT) {
    env = import.meta.env.VITE_API_CLIENT
}

console.log('------------env---------------', env)

let apiClient: ApiClientInterface 
if (env === 'live') {
    apiClient = apiLiveClient
} else {
    apiClient = apiMockClient
}

export default apiClient