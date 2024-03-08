import { defineStore } from "pinia";
import { ClassInterface } from "../interface/class.interface";
import { Ref, reactive, ref } from "vue";
import apiClient from "@/api-client";
import { SessionInterface } from "@/apps/session/models/interface/session.interface";
import { useSessionStore } from "@/apps/session/models/implementation/session.store.model";
import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface";

export const useClassStore = defineStore('classStore', {
    state: () => {
        useSessionStore().fetchDefaultSession
        const classes: ClassInterface[] = reactive([])
        const subjectsOfferedByClass: Ref<SubjectInterface[]> = ref([])
        const defaultSession: SessionInterface = useSessionStore().defaultSession

        return {
            classes,
            defaultSession,
            subjectsOfferedByClass
        }
    },

    getters: {
        getClasses: (state) => {
            return state.classes
        },
        getClass: (state) => {
            return (classID: number) => state.classes.find((_class) => _class.id === classID)
        },
        getClassesBySection: (state) => {
            return async (section: string) => {
                // Use async/await for asynchronous operations
                const filteredClasses = state.classes.filter(c => c.section === section);
                // Return the class names
                return filteredClasses;
            }
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
        },
    },
    
    actions: {
        async fetchClasses(schoolID: number, sessionID: number): Promise<ClassInterface[]> {
            this.classes = await apiClient.classes.fetchClasses(schoolID, sessionID)
            return this.classes
        },
        async addClass(newClass: ClassInterface): Promise<ClassInterface[]> {
            // newClass.session = this.defaultSession.session
            this.classes = await apiClient.classes.addClass(newClass)
            return this.classes
        },
        async fetchClassSubjects(schoolID: number, sessionID: number, classID: number): Promise<SubjectInterface[]> {
            this.subjectsOfferedByClass = await apiClient.classes.fetchClassSubjects(schoolID, sessionID, classID)
                return this.subjectsOfferedByClass
        },
        async addClassSubjects(schoolID: number, sessionID: number, classID: number, subjects: SubjectInterface[]): Promise<SubjectInterface[]> {
            this.subjectsOfferedByClass = await apiClient.classes.addClassSubjects(schoolID, sessionID, classID, subjects)
                return this.subjectsOfferedByClass
        },
    }
})


