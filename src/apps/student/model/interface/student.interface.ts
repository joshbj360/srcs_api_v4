export interface StudentInterface {
    id: number
    studentID: string
    first_name: string
    last_name: string
    other_names: string 
    Gender: string 
    password: string
    date_joined: string
    Address: string
    SOO: string
    LGA: string
    present_class: number
    ClassAdmitted: string
    StudentAdmissionStatus: string
    sessionID: number
    username: string
    school: number
    present_className: string
}

export interface StudentIDInterface {
    schoolID: number
    sessionID: number
    classID: number
    studentID: number

}