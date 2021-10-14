import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import ThemeBtnComponent from '../../customcontrols/ThemeBtnComponent/ThemeBtnComponent';
import { loginUser } from '../../redux/apicaller'
import konsole from '../../utilities/konsole';
import {withRouter} from 'react-router-dom';
import ActivityLoader from '../ActivityLoader/ActivityLoader';

import './LoginComponent.css';

const loginImgStyle:any = {
    backgroundImage:"url('/img/login-img.jpg')"
}

function LoginComponent(props:any) {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        const response:any = props.loginResponse;
        konsole.log('Login Response: '+JSON.stringify(response));

        if(response && response['LoginId']) {
            props.history.push("/dashboard");
        }

    },[props.loginResponse, props.history]);


    const handleClick = (e:any) => {
        
        const form:any = document.querySelector('#loginFormId');
        const isValidated = form.checkValidity();

        if (!isValidated) {
            e.preventDefault()
            e.stopPropagation()
        }

        form.classList.add('was-validated');

        if(isValidated) {
            e.preventDefault();
            props.loginUser(emailId, password);
        }
    }

    return (
        <>
        <div id="loginWrapper">
            <div className="loginBox" >
                <div className="loginImage" style={loginImgStyle}></div>
                <form id="loginFormId" className="loginForm needs-validation" noValidate>                  
                    <div className="heading">Hello Welcome Back</div>
                        <div className="from-group">
                            <input type="email" placeholder="Username" className="form-control" onChange={(e:any)=>setEmailId(e.target.value)} required/>
                            <div className="invalid-feedback">
                                Please fill a valid email Id
                            </div>
                        </div>
                        <div className="from-group">
                            <input type="password" placeholder="Password" className="form-control" onChange={(e:any)=>setPassword(e.target.value)} required/>
                            <div className="invalid-feedback">
                                Please fill your password
                            </div>
                        </div>
                        <ThemeBtnComponent type="button" className="btn loginBtn" onClick={handleClick}>Login</ThemeBtnComponent>
                </form>
            </div>
        </div>
        {(props.isLoading===true)?<ActivityLoader></ActivityLoader>:null}
        </>
    )
}

const mapStateToProps = (state:any) => {
    return {
        isLoading:state.isLoading,
        isError:state.isError,
        errorMsg:state.errorMsg,
        loginResponse:state.loginResponse
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        loginUser:(emailId:string, password:string)=>{
            dispatch(loginUser(emailId, password));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))
