export interface ClassUrlsInterface {
    fetchClasses(schoolID: number, sessionID: number): string
    addClass: string
    listAddClassSubjects(schoolID: number, sessionID: number, pk: number): string
}