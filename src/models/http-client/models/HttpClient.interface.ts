import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";

/**
 * @name HttpClientInterface
 * @description
 * Represents our HttpClient.
 */
export interface HttpClientInterface {
      /**
   * @name request
      * @description 
      * A method that executes different types of http requests (i.e. GET/POST/etc)
      * based on the parameters argument.
      * The type R specify the type of the result returned
      * The type P specify the type of payload if any
      * @returns A Promise<R> as the implementation of this method will be async.
      */

    /* get<T>(params: HttpRequestParamsInterface): Promise<T>
    get<T>(params: HttpRequestParamsInterface): Promise<T> */

    request<R, P = void>(parameters: HttpRequestParamsInterface): Promise<R>
}