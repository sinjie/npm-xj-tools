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

const axios = require('axios')
const { codeConfig } = require('./abnormalCodeTable')

interface Params {
  baseURL?: string;
  timeout?:string;
  errorCallback?: (error:string) => void;
  request?: (config:Config) => void;
  requestError?: (error:Error) => void;
  response?: (response:Response) => void;
  responseError?: (error:Error) => void;
}

interface Config{
  url?:string;
  method?:string;
  responseType?:string;
  data?:string;
  [propName:string]:any;
}

interface Error{
  massage:string;
  [propName:string]:any;
}

interface Response{
  data?:any;
  [propName:string]:any;
}


class HighAxios {
  baseURL:string;
  timeout:string;
  _errorCallback?: (error:string) => void;
  _request?: (config:Config) => void;
  _requestError?: (error:Error) => void;
  _response?: (response:Response) => void;
  _responseError?: (error:Error) => void;
  server?:any;
  cancel?:()=>void;
  constructor(params:Params) {
    this.baseURL = params.baseURL || "";
    this.timeout = params.timeout || "60000";
    this._errorCallback = params.errorCallback;
    this._request = params.request;
    this._requestError = params.requestError;
    this._response = params.response;
    this._responseError = params.responseError;

    this.init();
  }
  init() {
    this.server = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
    });
    this.server.interceptors.request.use(
      this.request.bind(this),
      this.requestError.bind(this)
    );
    this.server.interceptors.response.use(
      this.response.bind(this),
      this.responseError.bind(this)
    );
  }
  request(config:Config) {
    const self = this;
    config.cancelToken = new axios.CancelToken(function executor(c:()=>void) {
      self.cancel = c;
    });
    return this._request ? this._request(config) : config;
  }
  requestError(error:Error) {
    if (this._requestError) {
      this._requestError(error);
    } else {
      this.errorCallback(error.massage);
      Promise.reject(error);
    }
  }
  response(response:Response) {
    if (this._response) {
      return this._response(response);
    } else {
      const code = "" + response.data.code;
      if (Object.hasOwnProperty.call(codeConfig, code)) {
        return this.errorCallback(code + "：" + codeConfig.code);
      }
      return response;
    }
  }
  responseError(error:Error) {
    if (this._responseError) {
      return this._responseError(error);
    } else {
      this.errorCallback(error.massage);
      return Promise.reject(error);
    }
  }
  errorCallback(msg:string) {
    this._errorCallback ? this._errorCallback(msg) : console.error(msg);
  }
}

exports.HighAxios = HighAxios
