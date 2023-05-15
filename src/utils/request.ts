import { ElMessage } from 'element-plus'
import axios from "axios";
const codeis = [0,200]
const baseURL = import.meta.env.VITE_API || window.location.origin
const common = axios.create({ baseURL, timeout: 500 });
common.interceptors.request.use(
    (config) => { 
        let token = sessionStorage.getItem("token")
        if (token && config.headers) {
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
            return ElMessage.error('接口错误') 
        }
    }
)
declare global {
    interface Window {
        common: typeof common
    }
}
export default window.common=common; 

