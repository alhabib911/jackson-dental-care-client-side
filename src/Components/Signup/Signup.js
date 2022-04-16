import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
import { FcGoogle } from 'react-icons/fc';


const Signup = () => {
    const [fullName, SetFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleFullNameBlur =event =>{
        SetFullName(event.target.value)
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event=>{
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    return (
        <div className='login-components'>
            <h3>Sign Up Now</h3>
            <div className='form-container'>
                <div>
                    <label htmlFor="name">Your Full Name</label> <br />
                    <input onBlur={handleFullNameBlur} type="fullName" name="fullname" id="" placeholder='Your Full Name' required /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email Please' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password Please' required /> <br />
                    <label htmlFor="ConfirmPassword">Confirm Password</label> <br />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="ConfirmPassword" id="" placeholder='Confirm Your Password' required />
                    <button type="submit">Sign Up</button>
                    <h4>Already have an account? <Link to='/login'>Log In</Link></h4>
                    <p><FcGoogle></FcGoogle> <span>Signin with Google</span></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;