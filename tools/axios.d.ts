/**
 * @class axios二次封装类
 * @constructor
 * @param {params<Object>}
 *        @property {baseURL=''}  服务端地址
 *        @property {timeout=60000}  超时时间
 *        @property {errorCallback=()=>{}}  错误回调
 *        @property {request=()=>{}}  拦截器-请求-成功
 *        @property {requestError=()=>{})}  拦截器-请求-失败
 *        @property {response=()=>{})}  拦截器-返回-成功
 *        @property {responseError=()=>{})}  拦截器-返回-失败
 */
declare const axios: any;
declare const codeConfig: any;
interface Params {
    baseURL?: string;
    timeout?: string;
    errorCallback?: (error: string) => void;
    request?: (config: Config) => void;
    requestError?: (error: Error) => void;
    response?: (response: Response) => void;
    responseError?: (error: Error) => void;
}
interface Config {
    url?: string;
    method?: string;
    responseType?: string;
    data?: string;
    [propName: string]: any;
}
interface Error {
    massage: string;
    [propName: string]: any;
}
interface Response {
    data?: any;
    [propName: string]: any;
}
declare class HighAxios {
    baseURL: string;
    timeout: string;
    _errorCallback?: (error: string) => void;
    _request?: (config: Config) => void;
    _requestError?: (error: Error) => void;
    _response?: (response: Response) => void;
    _responseError?: (error: Error) => void;
    server?: any;
    cancel?: () => void;
    constructor(params: Params);
    init(): void;
    request(config: Config): void | Config;
    requestError(error: Error): void;
    response(response: Response): void | Response;
    responseError(error: Error): void | Promise<never>;
    errorCallback(msg: string): void;
}
