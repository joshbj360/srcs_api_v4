export interface SchoolInterface {
    readonly id: number
    name: string
    motto: string
    address: string
    facebook: string
    section: string
    sessionID: string
    schoolID: string
}

export class SchoolInterface {
    constructor(
    readonly id: number,
    public name: string,
    public motto: string,
    public address: string,
    public facebook: string,
    public section: string,
    public sessionID: string,
    public schoolID: string
    ) {}
}