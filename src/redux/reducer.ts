
import { LOGIN_RESPONSE, USER_RESPONSE, LOADING, ERROR_RESPONSE } from "./action";

const initialState:any = {
    isLoading:false,
    isError:null,
    errorMsg:'',
    loginResponse:null,
    userResponse:null
};

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case LOADING:{
            return Object.assign({}, state, {
                isLoading:action.payload
            });
        }
       case ERROR_RESPONSE: {
            return Object.assign({}, state, {
                isLoading:false,
                isError:true,
                errorMsg:action.payload
            });
       }
       case LOGIN_RESPONSE:{
          return Object.assign({}, state, {
            loginResponse: action.payload,
            isLoading:false
          });
       }
       case USER_RESPONSE:{
         return Object.assign({}, state, {
            userResponse:action.payload,
            isLoading:false
         });
       }
       default:
          return state;
    }
 }

 export default reducer;