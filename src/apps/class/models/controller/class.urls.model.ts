import { ClassApiClientInterface } from "../interface/class.api.interface"
import { ClassUrlsInterface } from "../interface/class.urls.interface"
import { classApiClientModel } from "./class.api.model"

const baseUrl = 'http://127.0.0.1:8000/en/api/v4'
const urls: ClassUrlsInterface = {
    fetchClasses: (schoolID, sessionID) => `${baseUrl}/${schoolID}/class/${sessionID}/`,
    addClass: `${baseUrl}/class/`,
    listAddClassSubjects:(schoolID, sessionID, pk) => 
        `${baseUrl}/school/${schoolID}/session/${sessionID}/class/${pk}/subjects`,
}
const classApiClient: ClassApiClientInterface = new classApiClientModel({urls})

export default classApiClient