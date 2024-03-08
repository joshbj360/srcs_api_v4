import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface"

export interface StudentUrlInterface {
    fetchStudents(schoolID: number, sessionID: number): string
    fetchStudentsByClass(schoolID: number, sessionID: number, classID: number): string
    addStudent(schoolID: number, sessionID: number): string
    updateStudent(schoolID: number, sessionID: number, studentID: number): string
    deleteStudent(schoolID: number, sessionID: number, studentID: number): string

    fetchStudentSubjects(schoolID: number, sessionID: number, studentID: number): string
    addStudentSubjects(schoolID: number, sessionID: number, studentID: number): string
}

