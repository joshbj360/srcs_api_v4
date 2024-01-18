import { ClassApiClientInterface } from "../interface/class.api.interface"
import { ClassUrlsInterface } from "../interface/class.urls.interface"
import { classApiClientModel } from "./class.api.model"

const urls: ClassUrlsInterface = {
    fetchClasses: 'http://127.0.0.1:8000/en/api/v4/class/',
    addClass: 'http://127.0.0.1:8000/en/api/v4/class/'
}
const classApiClient: ClassApiClientInterface = new classApiClientModel({urls})

export default classApiClient