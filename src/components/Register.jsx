import React from 'react';
import { useState } from 'react';
import logo from "../images/ADVANCED logo.png";
import {Link} from "react-router-dom";
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeName = (event) => {
        const { value } = event.target;
        console.log(value)
        setUserName(value);
    };
    const handleChangeEmail = (event) => {
        const { name, value } = event.target;
        setEmail(value);
    };
    const handleChangePhoneNumber = (event) => {
        const { value } = event.target;
        setPhoneNumber(value);
    };
    const handleChangePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let user = {
                user_name: userName,
                email: email,
                password: password,
                phone_number: phoneNumber,
            }
            const response = await axios.post('http://localhost:4000/users/register', user);
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };


    return (
        <div className='login_wrap'>
            <div className="login_logo">
                <img src={logo} alt="error"/>
            </div>
            <form action="#">
                <div className="input_boxes">
                    <div className="input_box ib-55">
                        <input className="input" type='text' value={userName} placeholder='Name' onChange={handleChangeName} required/>
                    </div>
                    <div className="input_box ib-55">
                        <input className="input" type='email' value={email} placeholder='Email' onChange={handleChangeEmail} required/>
                    </div>
                    <div className="input_box ib-55">
                        <input className="input" type='phone_number' value={phoneNumber} placeholder='Phone number' onChange={handleChangePhoneNumber} required/>
                    </div>
                    <div className="input_box ib-55">
                        <input className="input" type='password' value={password} placeholder='Password' onChange={handleChangePassword} required/>
                    </div>
                </div>
            </form>
            <div className="dont_have_acc">
                <Link to="/login">Already have an account? Login here</Link>
            </div>
            <input className="input_btn" type="button" onClick={handleSubmit} value="Register"/>
        </div>
    );
};

export default Register;