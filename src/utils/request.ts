import { ElMessage } from 'element-plus'
import useRouter from '@/router';
import axios from "axios";
const codeis = [0,200]
const baseURL = import.meta.env.VITE_API || window.location.origin
const common = axios.create({ baseURL, timeout: 500 });
common.interceptors.request.use(
    (config) => { 
        let token = sessionStorage.getItem("token")
        if (token && config.headers) {
            config.headers['Access-Control-Allow-Origin'] = '*'
            config.headers['Content-Type'] = 'application/json;charset=utf-8'
            config.headers['token'] = token
        }
        return config;
    },
)
common.interceptors.response.use(
    (config) =>{         
        if (codeis.includes(config.data.code)) {
            return config.data      
        } else {
            if (config.data.code == 401) {
                window.sessionStorage.clear()
                useRouter.push({path:'/login'})
            }
            ElMessage.error(config.data.message) 
            return Promise.reject(config.data.message)
        }
    }
)
declare global {
    interface Window {
        common: typeof common
    }
}
export default window.common=common; 

