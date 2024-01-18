import { StudentApiClientInterface } from "../interface/student.api.interface";
import { StudentUrlInterface } from "../interface/student.urls.interface";
import { StudentApiModel } from "./student.api.model";

const urls: StudentUrlInterface = {
    fetchStudents: 'http://127.0.0.1:8000/en/api/v4/student/'
}

const StudentApiClient: StudentApiClientInterface = new StudentApiModel({urls})

export default StudentApiClient