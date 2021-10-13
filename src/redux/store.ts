
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));
 
export default store;

/*-- Action --*/
import { loadingAction, loginResponse } from './action';

/*-- API --*/
import  {invokeLogin} from '../api/apiservice';

export const loginUser = (userName:string, password:string) => {
    store.dispatch(loadingAction(true));
    invokeLogin(userName, password).then((response:any)=>{
        return (dispatch:any) => {
            dispatch(loginResponse(response));
        }
    });
}
