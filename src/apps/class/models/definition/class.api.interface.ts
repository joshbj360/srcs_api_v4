import { ClassInterface } from "./class.interface"

export interface ClassApiClientInterface {
    fetchClasses: () => Promise<ClassInterface[]>
    addClass: (Class: ClassInterface) => Promise<void>
}