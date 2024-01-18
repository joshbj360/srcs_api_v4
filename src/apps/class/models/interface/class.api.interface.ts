import { ClassInterface } from "."

export interface ClassApiClientInterface {
    fetchClasses: () => Promise<ClassInterface[]>
    addClass: (Class: ClassInterface) => Promise<ClassInterface[]>
}