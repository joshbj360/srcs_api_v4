import apiClient from "@/api-client"
import { defineStore } from "pinia"
import { reactive } from "vue"
import { StudentInterface } from "../interface/student.interface"

export const useStudentStore = defineStore('StudentStore', {
    state: () => {
        const students: StudentInterface[] = reactive([])

        return {
            students
        }
    },
    getters: {
        getStudents: (state) => {
            return state.students
        },
        getStudentInfo: (state) => {
            return (selectedColumns: string[]): StudentInterface[] => {
                return state.students.map(orgStdItem => {
                    const newStdItem: StudentInterface = {} as StudentInterface
                    selectedColumns.forEach(s => {
                        newStdItem[s as keyof StudentInterface] = orgStdItem[s as keyof StudentInterface]
                    })
                    return newStdItem
                })
            }
        },
    },
    actions: {
        async fetchStudents(): Promise<StudentInterface[]> {
            this.students = await apiClient.students.fetchStudents()
            return this.students
        }
    }
})