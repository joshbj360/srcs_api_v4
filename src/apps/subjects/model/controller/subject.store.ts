import { defineStore } from "pinia";
import { SubjectInterface } from "../interface/subject.interface";
import apiClient from "@/api-client";
import { reactive } from "vue";

export const useSubjectStore = defineStore('SubjectStore1', {
    state: () => {
        const subjects: SubjectInterface[] = reactive([])
        return {subjects}
    },

    getters: {
        getSubjects: (state) => {
            return state.subjects
        },
        getSubject: (state) => {
            return (subjectID: string) => state.subjects.find((s) => s.subjectID === subjectID)
        },
    },

    actions: {
        async fetchSubjects(): Promise<SubjectInterface[]> {
            this.subjects = await apiClient.subjects.fetchSubjects()
            return this.subjects
        }
    }
})