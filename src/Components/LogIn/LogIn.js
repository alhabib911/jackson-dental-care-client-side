import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogIn.css'
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'

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

      if (user){
        navigate ('/home')
    }

    const handleEmailBlur = event =>{
        SetEmail(event.target.value)
    }
    const handlePasswordBlur =event => {
        setPassword(event.target.value)
    }

    const handleUserSignIn =event =>{
        event.preventDefault();
        signInWithEmailAndPassword (email, password)
    }

    return (
        <div className='login-components'>
            <h3>Log In Now</h3>
            <form onSubmit={handleUserSignIn} className='form-container'>
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
                    <input type="submit" value="Continue" />
                    <h4>New to Jackson Dental Care? <Link to='/signup'>Create an Account</Link></h4>
                    <h5>OR</h5>
                    <p className='signinwithgoogle'><FcGoogle></FcGoogle> <span>Signin with Google</span></p>
                </div>
            </form>
        </div>
    );
};

export default LogIn;