import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client";
import { sessionApiClientInterface } from "../interface/session.api.interface";
import { SessionUrlsInterface } from "../interface/session.urls.interface";
import { SessionInterface } from "../interface/session.interface";
import { get } from "http";
import { promises } from "dns";

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
            requiresToken: true
        }
        return httpClient.request<SessionInterface>(getParameters)
    }
    setDefaultSession(session: SessionInterface): Promise<SessionInterface> {
        const { ...rest } = session
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.put,
            url: this.urls.fetchDefaultSession,
            requiresToken: true,
            payload: { rest }
        }
        return httpClient.request<SessionInterface>(getParameters)
    }

    fetchSessions(): Promise<SessionInterface[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSessions,
            requiresToken: false
        }
        return httpClient.request<SessionInterface[]>(getParameters)
    }
    addSession(session: SessionInterface): Promise<SessionInterface> {
        const {year, term, defaultSession, } = session

        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.post,
            url: this.urls.addSession,
            requiresToken: true,
            payload: {year, term, defaultSession}
        }
        return httpClient.request<SessionInterface>(getParameters)
    }
    
}