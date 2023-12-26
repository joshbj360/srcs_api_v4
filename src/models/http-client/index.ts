import { HttpClientAxios, HttpClientInterface } from "./models";

export const httpClient: HttpClientInterface = new HttpClientAxios()

export * from './models'