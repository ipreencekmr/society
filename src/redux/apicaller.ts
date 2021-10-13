
import store from './store';

/*-- Action --*/
import { loadingAction, loginResponse } from './action';

/*-- API --*/
import  {invokeLogin} from '../api/apiservice';

export const loginUser =async (userName:string, password:string) => {
    store.dispatch(loadingAction(true));
    const response = await invokeLogin(userName, password);
    return (dispatch:any) => {
        dispatch(loginResponse(response));
    }
}