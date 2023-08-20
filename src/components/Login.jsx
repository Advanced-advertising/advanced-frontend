import React, {useState, useEffect} from 'react';
import logo from "../images/ADVANCED logo.png"
import pass from "../images/Lock icon.png"
import {Link} from "react-router-dom";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const userToken = localStorage.getItem('userToken')

    useEffect(() => {
        if (userToken !== null) {
            navigate("/main");
        }
    }, [userToken]);
    const handleChangeName = (event) => {
        const { value } = event.target;
        console.log(value)
        setUserName(value);
    };

    const handleChangePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const base64Credentials = btoa(`${userName}:${password}`);

        const config = {
            headers: {
                Authorization: `Basic ${base64Credentials}`,
            },
        };

        try {
            const response = await axios.get('http://localhost:4000/users/login', config);
            localStorage.setItem('userToken', response.data);
            navigate('/main')
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className='login_wrap'>
            <div className="login_logo">
                <img src={logo} alt="error"/>
            </div>
            
            <form action="#">
                <div className="input_boxes">
                    <div className="input_box">
                        <input className="input" type='text' value={userName} onChange={handleChangeName} placeholder='Name' required/>
                    </div>
                    <div className="input_box ib-55">
                        <i><img src={pass} alt="error"/></i>
                        <input className="input" type='password' value={password} onChange={handleChangePassword} placeholder='Password' required/>
                    </div>
                </div>
            </form>
            <div className="dont_have_acc">
                <Link to="/register">Don’t have an account? Register here</Link>
            </div>
            <input className="input_btn" type="button" onClick={handleSubmit} value="Login"/>
        </div>
    );
};

export default Login;