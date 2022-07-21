"use strict";
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
var axios = require('axios');
var codeConfig = require('./abnormalCodeTable').codeConfig;
var HighAxios = /** @class */ (function () {
    function HighAxios(params) {
        this.baseURL = params.baseURL || "";
        this.timeout = params.timeout || "60000";
        this._errorCallback = params.errorCallback;
        this._request = params.request;
        this._requestError = params.requestError;
        this._response = params.response;
        this._responseError = params.responseError;
        this.init();
    }
    HighAxios.prototype.init = function () {
        this.server = axios.create({
            baseURL: this.baseURL,
            timeout: this.timeout,
        });
        this.server.interceptors.request.use(this.request.bind(this), this.requestError.bind(this));
        this.server.interceptors.response.use(this.response.bind(this), this.responseError.bind(this));
    };
    HighAxios.prototype.request = function (config) {
        var self = this;
        config.cancelToken = new axios.CancelToken(function executor(c) {
            self.cancel = c;
        });
        return this._request ? this._request(config) : config;
    };
    HighAxios.prototype.requestError = function (error) {
        if (this._requestError) {
            this._requestError(error);
        }
        else {
            this.errorCallback(error.massage);
            Promise.reject(error);
        }
    };
    HighAxios.prototype.response = function (response) {
        if (this._response) {
            return this._response(response);
        }
        else {
            var code = "" + response.data.code;
            if (Object.hasOwnProperty.call(codeConfig, code)) {
                return this.errorCallback(code + "：" + codeConfig.code);
            }
            return response;
        }
    };
    HighAxios.prototype.responseError = function (error) {
        if (this._responseError) {
            return this._responseError(error);
        }
        else {
            this.errorCallback(error.massage);
            return Promise.reject(error);
        }
    };
    HighAxios.prototype.errorCallback = function (msg) {
        this._errorCallback ? this._errorCallback(msg) : console.error(msg);
    };
    return HighAxios;
}());
exports.HighAxios = HighAxios;
