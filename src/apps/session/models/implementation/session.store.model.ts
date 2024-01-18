import { defineStore } from "pinia";
import { SessionInterface } from "../interface/session.interface";
import { reactive } from "vue";
import apiLiveClient from "@/api-client/live";

export const useSessionStore = defineStore('sessionStore1', {
    state: () => {
        const defaultSession: SessionInterface = reactive<SessionInterface>({
            year: '',
            term: '',
            IsDefaultSession: false,
            session: ''
        })
        const sessions: SessionInterface[] = reactive<SessionInterface[]>([])

        return {
             defaultSession,
            sessions
        }
    },

    getters: {
        
    },

    actions:{
        async fetchSessions(): Promise<SessionInterface[]> {
            try {
               this.sessions.length = 0
               this.sessions = await apiLiveClient.sessions.fetchSessions()
               return this.sessions
            } catch(e) {
                console.error("Unable to fetch sessions", e)
                 // If an error occurs, you might want to throw it to propagate the error
                throw e
            }
        },
        async setDefaultSession(session: SessionInterface): Promise<SessionInterface> {
            try {
               this.defaultSession = await apiLiveClient.sessions.setDefaultSession(session)
               return this.defaultSession
            } catch(e) {
                console.error("Unable to set default session", e)
                 // If an error occurs, you might want to throw it to propagate the error
                throw e
            }
        },
        async fetchDefaultSession(): Promise<SessionInterface> {
            try {
               this.defaultSession = await apiLiveClient.sessions.fetchDefaultSession()
               return this.defaultSession
            } catch(e) {
                console.error("Unable to fetch default session", e)
                 // If an error occurs, you might want to throw it to propagate the error
                throw e
            }
        },
    },
})