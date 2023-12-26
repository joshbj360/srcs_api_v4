import { HttpRequestParamsInterface, HttpRequestType, httpClient } from "@/models/http-client";
import { sessionApiClientInterface } from "../interface/session.api.interface";
import { SessionUrlsInterface } from "../interface/session.urls.interface";
import { Session } from "./session.model";

export class SessionClientModel implements sessionApiClientInterface {
    private readonly urls!: SessionUrlsInterface

    constructor(options: {
        urls: SessionUrlsInterface,
    }) {
        this.urls = options.urls
    }

    fetchSessions(): Promise<Session[]> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSessions,
            requiresToken: false
        }
        return httpClient.request<Session[]>(getParameters)
    }
    fetchSession(): Promise<Session> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSession,
            requiresToken: false
        }
        return httpClient.request<Session>(getParameters)
    }
    addSession(): Promise<void> {
        const getParameters: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            url: this.urls.fetchSessions,
            requiresToken: false
        }
        return httpClient.request<void>(getParameters)
    }
}