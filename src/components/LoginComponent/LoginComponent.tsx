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
        const response = props.loginResponse;
        konsole.log('Login Response: '+JSON.stringify(response));

        if(response) {
            props.history.push("/dashboard");
        }
    },[props.loginResponse]);


    const handleClick = (e:any) => {
        e.preventDefault();

        konsole.log('emailId: '+emailId);
        konsole.log('password:'+password);

        props.loginUser(emailId, password);
    }

    return (
        <>
        <div id="loginWrapper">
            <div className="loginBox">
                <div className="loginImage" style={loginImgStyle}></div>
                <div className="loginForm">                  
                    <div className="heading">Hello Welcome Back</div>
                        <div className="from-group">
                            <input type="text" placeholder="Username" className="form-control" onChange={(e:any)=>setEmailId(e.target.value)} required/>
                        </div>
                        <div className="from-group">
                            <input type="password" placeholder="Password" className="form-control" onChange={(e:any)=>setPassword(e.target.value)} required/>
                        </div>
                        <ThemeBtnComponent type="button" className="btn loginBtn" onClick={handleClick}>Login</ThemeBtnComponent>
                </div>
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
