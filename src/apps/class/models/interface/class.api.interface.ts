import { SubjectInterface } from "@/apps/subjects/model/interface/subject.interface"
import { ClassInterface } from "."

export interface ClassApiClientInterface {
    fetchClasses: (schoolID: number, sessionID: number) => Promise<ClassInterface[]>
    addClass: (Class: ClassInterface) => Promise<ClassInterface[]>
    fetchClassSubjects: (schoolID: number, sessionID: number, classID: number) => Promise<SubjectInterface[]>
    addClassSubjects: (schoolID: number, sessionID: number, classID: number, subjects: SubjectInterface[]) => Promise<SubjectInterface[]>
}