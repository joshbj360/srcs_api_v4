import { StudentApiClientInterface } from "../interface/student.api.interface";
import { StudentUrlInterface } from "../interface/student.urls.interface";
import { StudentApiModel } from "./student.api.model";

const baseUrl = 'http://127.0.0.1:8000/en/api/v4'
const urls: StudentUrlInterface = {
    fetchStudents: (schoolID: number, sessionID: number) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/`,
    fetchStudentsByClass: (schoolID: number, sessionID: number, classID) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/class/${classID}/`,
    addStudent: (schoolID: number, sessionID: number) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/`,
    updateStudent: (schoolID: number, sessionID: number, studentID: number) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/student/${studentID}/`,
    deleteStudent: (schoolID: number, sessionID: number, studentID: number) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/student/${studentID}/`,

    fetchStudentSubjects: (schoolID: number, sessionID: number, studentID: number) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/student/${studentID}/`,
    addStudentSubjects: (schoolID: number, sessionID: number, studentID: number) =>
        `${baseUrl}/school/${schoolID}/session/${sessionID}/student/${studentID}/`,

}

const StudentApiClient: StudentApiClientInterface = new StudentApiModel({urls})

export default StudentApiClient