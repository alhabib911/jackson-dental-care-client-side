import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Signup.css'
import SocialLogIn from '../LogIn/SocialLogIn';
import { sendEmailVerification } from 'firebase/auth';

const Signup = () => {
    const [fullname, SetFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleFullNameBlur = event => {
        SetFullName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/home')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your Password Did Not Match')
            return;
        }
        if (password.length < 8) {
            setError('Please input minimum 8 Characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
        verifyEmail()
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log('Email Verification Sent');
        })
    }

    return (
        <div className='login-components'>
            <h3>Sign Up Now</h3>
            <form onSubmit={handleCreateUser} className='signup-form-container'>
                <div>
                    <label htmlFor="name">Your Full Name</label> <br />
                    <input onBlur={handleFullNameBlur} type="fullname" name="fullname" id="" placeholder='Your Full Name' required /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email Please' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password Please' required /> <br />
                    <label htmlFor="ConfirmPassword">Confirm Password</label> <br />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="ConfirmPassword" id="" placeholder='Confirm Your Password' required /> <br />
                    <p className='error'>{error}</p> <br />
                    <input className='signup-button' type="submit" value="Signup" />
                    <h4>Already have an account? <Link to='/login'>Log In</Link></h4>
                </div>
                
                <div 
                className='social-sign-up'>
                    
                <h4>OR</h4>
                    <SocialLogIn></SocialLogIn>
                </div>
            </form>

        </div>
    );
};

export default Signup;