import { SessionInterface } from "../interface/session.interface";

export class Session implements SessionInterface {
    private _year: string = ''
    private  _term : string = ''


    
    get term() : string {
        return this._term
    }
    set term(value: string) {
        this._term = value
    }
    get year() : string {
        return this._year
    }
    set year(value: string) {
        this._year = value
    }
    

    
}