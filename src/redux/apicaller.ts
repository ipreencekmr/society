
/*-- Action --*/
import { loadingAction, loginResponse , errorAction} from './action';

/*-- API --*/
import  { invokeLogin } from '../api/apiservice';

export const loginUser = (userName:string, password:string) => {
    return (dispatch:any) => { //nameless functions
        dispatch(loadingAction(true)); // Initial action dispatched
         // Return promise with success and failure actions
        invokeLogin(userName, password).then((response:any)=>{
            dispatch(loginResponse(response.data));
        }).catch((e:any)=>{
            dispatch(errorAction(e));
        });
    };
}