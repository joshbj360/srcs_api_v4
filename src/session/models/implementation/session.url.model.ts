import { sessionApiClientInterface } from "../interface/session.api.interface";
import { SessionUrlsInterface } from "../interface/session.urls.interface";
import { SessionClientModel } from "./session.api.model";

const urls: SessionUrlsInterface = {
    fetchSessions: 'http://127.0.0.1:8000/en/api/v4/sessions/',
    addSession:'http://127.0.0.1:8000/en/api/v4/sessions/',
    deleteSession: "",
    fetchDefaultSession: "http://127.0.0.1:8000/en/api/v4/sessions/default/1/",
    setDefaultSession: "http://127.0.0.1:8000/en/api/v4/sessions/default/1/",
}

const SessionApiClient: sessionApiClientInterface = new SessionClientModel({urls})

export default SessionApiClient