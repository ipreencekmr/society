const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

const METHOD_POST = 'POST';
const METHOD_GET  = 'GET';

import { loginUrl } from "./apiurls";

export const invokeAPI = async (url:string, method:string, body:any) => {
    try {
        const response = await axios({
            method:method,
            url:url,
            params:(method ===METHOD_GET)?body:{},
            data:(method===METHOD_POST)?body:{}
        });
        return response;
    }catch(e:any) {
        return {"data":e};
    }
}

export const invokeLogin = async (username:string, password:string) => { 
    const body:any = {username:username,password:password};
    return await invokeAPI(loginUrl, METHOD_POST, body);
}

