import axios from 'axios';
// 基本接口
const http = axios.create({
  baseURL: VUE_APP_BMW,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    function (data) {
      const data_json = JSON.stringify(data);
      return data_json;
    }
  ]
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

// 退款的接口
const http_refund = axios.create({
  baseURL: VUE_APP_BMW_REFUND,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    function (data) {
      const data_json = JSON.stringify(data);
      return data_json;
    }
  ]
});

http_refund.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

// 登陆的接口
const http_login = axios.create({
  baseURL: VUE_APP_BMW_LOGIN,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    function (data) {
      const data_json = JSON.stringify(data);
      return data_json;
    }
  ]
});

http_login.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

// 暴露http实例，在上传imgselect中使用
export { http, http_login };

// post
export function http_post(url, data = {}) {
  return http.post(url, data);
}

// post_refund
export function http_post_refund(url, data = {}) {
  return http_refund.post(url, data);
}

// post_login
export function http_get_login(url, data = {}) {
  return http_login.get(url, data);
}
