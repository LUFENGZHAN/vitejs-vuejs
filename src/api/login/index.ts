const api = { 
    login(data?: any){
        return window.common.request({
            url:`/api/login`,
            method: 'POST',
            data
        })
    },
}
export default api;