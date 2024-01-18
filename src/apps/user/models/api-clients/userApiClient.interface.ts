import { IToken } from "../token.interface";
import { UserInterface } from "../user.interface";

export interface UserApiClientInterface {
    fetchUsers: () => Promise<UserInterface[]>
    addUser: (username: string, password: string, firstName: string, lastName: string) => Promise<any>
    loginUser: (username: string, password: string) => Promise<IToken>
}