
import { loginUrl } from "./apiurls";
import konsole from "../utilities/konsole";

const axios = require('axios').default;
axios.defaults.baseURL = 'https://test-tn.mcura.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

const METHOD_POST = 'POST';
const METHOD_GET  = 'GET';

export const invokeAPI = (url:string, method:string, body:any) => {
    konsole.log('URL: '+url, 'Params: '+JSON.stringify(body));

    return axios({
        method:method,
        url:url,
        params:(method ===METHOD_GET)?body:{},
        data:(method===METHOD_POST)?body:{}
    });
}

export const invokeLogin = (username:string, password:string) => { 
    konsole.log('service->invokeLogin');
    const body:any = {UseraName:username,PWD:password};
    return invokeAPI(loginUrl, METHOD_GET, body);
}

