import { StudentInterface } from "./student.interface";

export interface StudentApiClientInterface {
    fetchStudents: () => Promise<StudentInterface[]>
}