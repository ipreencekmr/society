const ACTION_TYPE = 'type';
const ACTION_PAYLOAD =  'payload';

export const LOADING = 'LOADING';
export const ERROR_RESPONSE = 'ERROR_RESPONSE';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const USER_RESPONSE = 'USER_RESPONSE';

export const loadingAction = (payload:any) => {
    return {
        ACTION_TYPE:LOADING,
        ACTION_PAYLOAD:payload
    }
}

export const errorAction = (payload:any) => {
    return {
        ACTION_TYPE:ERROR_RESPONSE,
        ACTION_PAYLOAD:payload
    }
}

export const loginResponse = (payload:any) => {
    return {
        ACTION_TYPE:LOGIN_RESPONSE,
        ACTION_PAYLOAD:payload
    }
}

export const userResponse = (payload:any) => {
    return {
        ACTION_TYPE:USER_RESPONSE,
        ACTION_PAYLOAD:payload
    }
}

