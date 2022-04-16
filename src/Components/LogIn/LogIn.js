import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'
import { FcGoogle } from 'react-icons/fc';

const LogIn = () => {
    return (
        <div className='login-components'>
            <h3>Please Log In</h3>
            <div className='form-container'>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" id="" placeholder='Your Email Please' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" id="" placeholder='Your Password Please' required />
                    <button type="submit">LogIn</button>
                    <h4>New to Jackson Dental Care? <Link to='/signup'>Create an Account</Link></h4>
                    <h5>OR</h5>
                    <p><FcGoogle></FcGoogle> <span>Signin with Google</span></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;