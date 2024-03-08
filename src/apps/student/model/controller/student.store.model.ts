import apiClient from "@/api-client"
import { defineStore } from "pinia"
import { reactive, Ref, ref } from "vue"
import { StudentInterface } from "../interface/student.interface"
import { useClassStore } from "@/apps/class/models/controller/class.store.model"
import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface"

export const useStudentStore = defineStore('StudentStore', {
    state: () => {
        const students: StudentInterface[] = []
        const className: string = ''
        const student: Ref<StudentInterface> = ref({
            id:0, 
            first_name: '',
            last_name: '',
            other_names: '',
            Gender: '',
            StudentAdmissionStatus: '',
            ClassAdmitted: '',
            studentID: '',
            Address:'',
            SOO: '',
            LGA: '',
            present_class:0,
            password:'',
            date_joined: '2020/01/01',
            sessionID: 0,
            username: '',
            school: 0,
            present_className: ''
        })
        const subjectsOffered: SubjectInterface[] = []
        return {
            students,
            student,
            className,
            subjectsOffered
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
        getClassName(state) {
            return (classID: string) => useClassStore().getClass(classID)?.name
        }
    },
    actions: {
        async fetchStudents(schoolID: number, sessionID: number): Promise<StudentInterface[]> {
            this. students.length = 0
            this.students = await apiClient.students.fetchStudents(schoolID, sessionID)
            // this.students.forEach(s => s.present_className === this.getClassName(s.present_class))
            return this.students
        },
        async fetchStudentsByClass(schoolID: number, sessionID: number, classID: number): Promise<StudentInterface[]> {
            this. students.length = 0
            this.students = await apiClient.students.fetchStudentsByClass(schoolID, sessionID, classID)
            return this.students
        },
        async addStudent(schoolID: number, sessionID: number, student: StudentInterface): Promise<StudentInterface> {
            this.student = await apiClient.students.addStudent(schoolID, sessionID, student)
            return this.student
        },
        async updateStudent(schoolID: number, sessionID: number, student: StudentInterface): Promise<StudentInterface> {
            this.student = await apiClient.students.updateStudent(schoolID, sessionID, student)
            return this.student
        },
        async deleteStudent(schoolID: number, sessionID: number, studentID: number): Promise<void> {
            return await apiClient.students.deleteStudent(schoolID, sessionID, studentID)
        },
        async fetchStudentSubjects(schoolID: number, sessionID: number, studentID: number): Promise<SubjectInterface[]> {
            return this.subjectsOffered = await apiClient.students.fetchStudentSubjects(schoolID, sessionID, studentID)
        },
        async addStudentSubjects(schoolID: number, sessionID: number, studentID: number, subjects: SubjectInterface[]): Promise<SubjectInterface[]> {
            return this.subjectsOffered =  await apiClient.students.addStudentSubjects(schoolID, sessionID, studentID, subjects)
        },
    }
})