const api = { 
    login(data?: any){
        return window.common.request({
            url:`/api/login`,
            method: 'POST',
            data
        })
    },
    list(data?: any){
        return window.common.request({
            url:`/api/data/city/list`,
            method: 'get',
            data
        })
    },
}
export default api;