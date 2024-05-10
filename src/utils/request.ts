import axios from 'axios'
import { ElMessage } from 'element-plus'
//创建axios实例,利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
let request = axios.create({
  //请求基础地址
  baseURL: import.meta.env.VITE_APP_BASE_API,
  //请求超时时间
  timeout: 5000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  return config
})
//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    //处理网络错误
    let msg = ''
    let status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
