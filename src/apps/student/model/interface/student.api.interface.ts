import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface";
import { StudentInterface } from "./student.interface";

export interface StudentApiClientInterface {
    fetchStudents: (schoolID: number, sessionID: number) => Promise<StudentInterface[]>,
    fetchStudentsByClass: (schoolID: number, sessionID: number, classID: number) => Promise<StudentInterface[]>,
    addStudent: (schoolID: number, sessionID: number, student: StudentInterface) => Promise<StudentInterface>,
    updateStudent:(schoolID: number, sessionID: number, student: StudentInterface) => Promise<StudentInterface>
    deleteStudent:(schoolID: number, sessionID: number, studentID: number) => Promise<void>

    fetchStudentSubjects: (schoolID: number, sessionID: number, studentID: number) => Promise<SubjectInterface[]>
    addStudentSubjects: (schoolID: number, sessionID: number, studentID: number, subjects: SubjectInterface[]) => Promise<SubjectInterface[]>
}