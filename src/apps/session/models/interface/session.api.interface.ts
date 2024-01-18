import { SessionInterface } from "./session.interface";

export interface sessionApiClientInterface {
    fetchSessions: () => Promise<SessionInterface[]>
    addSession: (session: SessionInterface) => Promise<SessionInterface>
    deleteSession: (session: SessionInterface) => Promise<void>
    fetchDefaultSession: () => Promise<SessionInterface>
    setDefaultSession: (session: SessionInterface) => Promise<SessionInterface>
}