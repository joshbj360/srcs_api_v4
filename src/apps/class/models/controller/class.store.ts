import { defineStore } from "pinia";
import { ClassInterface } from "../interface/class.interface";
import { reactive } from "vue";
import apiClient from "@/api-client";
import { SessionInterface } from "@/apps/session/models/interface/session.interface";
import { useSessionStore } from "@/apps/session/models/implementation/session.store.model";

export const useClassStore = defineStore('classStore', {
    state: () => {
        useSessionStore().fetchDefaultSession
        const classes: ClassInterface[] = reactive([])
        const defaultSession: SessionInterface = useSessionStore().defaultSession

        return {
            classes,
            defaultSession
        }
    },

    getters: {
        getClasses: (state) => {
            return state.classes
        },
        getClass: (state) => {
            return (classID: string) => state.classes.find((_class) => _class.classID === classID)
        },
        getClassesInfo: (state) => {
            return ( selectedColumns: string[]): ClassInterface[] => {
                return state.classes.map(originalClassItem => {
                    const newClassItem: ClassInterface = {} as ClassInterface
                selectedColumns.forEach(s => {
                        newClassItem[s as keyof ClassInterface] = originalClassItem[s as keyof ClassInterface]
                    })
                    return newClassItem
                })
            }
        }
    },
    
    actions: {
        async fetchClasses(): Promise<ClassInterface[]> {
            this.classes = await apiClient.classes.fetchClasses()
            return this.classes
        },
        async addClass(newClass: ClassInterface): Promise<ClassInterface[]> {
            console.log("Default Session: ", this.defaultSession.session)
            newClass.session = this.defaultSession.session
            this.classes = await apiClient.classes.addClass(newClass)
            return this.classes
        }
    }
})