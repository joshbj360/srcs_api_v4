import { ClassApiClientInterface } from "../definition/class.api.interface"
import { ClassUrlsInterface } from "../definition/class.urls.interface"
import { classApiClientModel } from "./class.api.model"

const urls: ClassUrlsInterface = {
    fetchClasses: '',
    addClass: ''
}
const classApiClient: ClassApiClientInterface = new classApiClientModel({urls})

export default classApiClient