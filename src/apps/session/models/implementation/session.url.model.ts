import { sessionApiClientInterface } from "../interface/session.api.interface";
import { SessionUrlsInterface } from "../interface/session.urls.interface";
import { SessionClientModel } from "./session.api.model";

const baseUrl = 'http://127.0.0.1:8000/en/api/v4'
const urls: SessionUrlsInterface = {
    fetchSessions: `${baseUrl}/sessions/`,
    addSession: baseUrl,
    deleteSession: "",
    fetchDefaultSession: `${baseUrl}/sessions/default/1/`,
    setDefaultSession: `${baseUrl}/sessions/default/1/`,
}

const SessionApiClient: sessionApiClientInterface = new SessionClientModel({urls})

export default SessionApiClient