import { Session } from "../implementation/session.model";

export interface sessionApiClientInterface {
    fetchSession: () => Promise<Session>
    fetchSessions: () => Promise<Session[]>
    addSession: () => Promise<void>
}