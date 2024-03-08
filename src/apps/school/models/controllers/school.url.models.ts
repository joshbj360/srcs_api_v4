import { SchoolApiClientInterface } from "../interface/school.api.interface";
import { SchoolUrlInterface } from "../interface/school.urls.interface";
import { SchoolApiModel } from "./school.api.model";

const baseUrl = 'http://127.0.0.1:8000/en/api/v4/schools/'

const urls: SchoolUrlInterface = {
    fetchSchools: baseUrl,
    updateSchool: (id: number) => `${baseUrl}${id}/`,
    addSchool: baseUrl
}

const SchoolApiClient: SchoolApiClientInterface = new SchoolApiModel({urls})

export default SchoolApiClient