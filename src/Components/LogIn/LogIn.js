import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogIn.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogIn from './SocialLogIn';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LogIn = () => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    const handleEmailBlur = event => {
        SetEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Email Sent');
            })
    }

    return (
        <div className='login-components'>
            <h3>Log In Now</h3>
            <form onSubmit={handleUserSignIn} className='login-form-container'>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email Please' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password Please' required />
                    <br />
                    <br />
                    {
                        loading && <p>Loading...</p>
                    }
                    <p className='error'>{error?.message}</p>
                    <input className='submit-lonin' type="submit" value="Continue" />
                </div>
            </form>
            <div className='social-log-in'>
                <button onClick={handlePasswordReset} className='forget-btn'>Forget Your Password?</button>
                <h4 className='singup-link'>New to Jackson Dental Care? <Link to='/signup'>Create an Account</Link></h4>
                <h5>OR</h5>
                <SocialLogIn></SocialLogIn>
                <ToastContainer />
            </div>
        </div>
    );
};

export default LogIn;