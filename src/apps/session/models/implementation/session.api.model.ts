import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client";
import { sessionApiClientInterface } from "../interface/session.api.interface";
import { SessionUrlsInterface } from "../interface/session.urls.interface";
import { SessionInterface } from "../interface/session.interface";


export class SessionClientModel implements sessionApiClientInterface {
    private readonly urls!: SessionUrlsInterface

    constructor(options: {
        urls: SessionUrlsInterface,
    }) {
        this.urls = options.urls
    }
    deleteSession(session: SessionInterface): Promise<void> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.deleteSession,
            requiresToken: true,
            payload: {
                id:''
            }
        }
        return httpClient.request<void>(getParameters)
    }
    fetchDefaultSession(): Promise<SessionInterface> {
        const getParameters: HttpRequestParamsInterface ={
            requestType: HttpRequestType.get,
            url: this.urls.fetchDefaultSession,
            requiresToken: false,
            requestLog: '---------fetch default session'
        }
        return httpClient.request<SessionInterface>(getParameters)
    }
    setDefaultSession(session: SessionInterface): Promise<SessionInterface> {
        const { ...rest } = session
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.put,
            url: this.urls.setDefaultSession,
            requiresToken: true,
            payload: { rest },
            requestLog: '----------set default session'
        }
        return httpClient.request<SessionInterface>(getParameters)
    }

    fetchSessions(): Promise<SessionInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSessions,
            requiresToken: false,
            requestLog: '---------fetch sessions'
        }
        return httpClient.request<SessionInterface[]>(getParameters)
    }
    addSession(session: SessionInterface): Promise<SessionInterface> {
        const {id, year, term, IsDefaultSession } = session

        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addSession,
            requiresToken: true,
            payload: {id, year, term, IsDefaultSession}
        }
        return httpClient.request<SessionInterface>(getParameters)
    }
    
}