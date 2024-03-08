import { SchoolInterface } from "./school.interface";

export interface SchoolApiClientInterface {
    fetchSchools: () => Promise<SchoolInterface[]>,
    updateSchool: (school: SchoolInterface) => Promise<SchoolInterface>,
    addSchool: () => Promise<SchoolInterface>
}