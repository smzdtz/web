// http.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
  // 联调
  // baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api',
  baseURL: "/api",
  // 是否跨站点访问控制请求
  withCredentials: true,
  timeout: 30000,
  transformRequest: [
    (data) => {
      data = JSON.stringify(data);
      return data;
    },
  ],
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  },
  transformResponse: [
    (data) => {
      if (typeof data === "string" && data.startsWith("{")) {
        data = JSON.parse(data);
      }
      return data;
    },
  ],
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log;
    return response.data;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("repeated request: " + error.message);
    } else {
      error.data = {};
      error.data.msg = "error";
    }
    return Promise.reject(error);
  }
);

export default service;
