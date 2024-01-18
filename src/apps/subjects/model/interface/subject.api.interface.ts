import { SubjectInterface } from "./subject.interface";

export interface SubjectApiClientInterface {
    fetchSubjects: () => Promise<SubjectInterface[]>
}