import React from 'react';
import logo from "../images/ADVANCED logo.png"
import email from "../images/Letter icon.png"
import pass from "../images/Lock icon.png"
import {Link} from "react-router-dom";
import './Login.css';

const Login = () => {
    return (
        <div className='login_wrap'>
            <div className="login_logo">
                <img src={logo} alt="error"/>
            </div>
            
            <form action="#">
                <div className="input_boxes">
                    <div className="input_box">
                        <i><img src={email} alt="error"/></i>
                        <input className="input" type='email' placeholder='Email' required/>
                    </div>
                    <div className="input_box ib-55">
                        <i><img src={pass} alt="error"/></i>
                        <input className="input" type='password' placeholder='Password' required/>
                    </div>
                </div>
            </form>
            <div className="dont_have_acc">
                <Link to="/register">Don’t have an account? Register here</Link>
            </div>
            <input className="input_btn" type="button" value="Login"/>
        </div>
    );
};

export default Login;