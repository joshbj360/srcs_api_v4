export interface UserInterface {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    other_names?: string | null;
    DOB: string;
    Address?: string | null;
    Gender: string
    Religion?: string
    Disability?: string | null;
    PhoneNumber: string;
    Nationality: string;
    SOO: string;
    LGA: string;
    

}