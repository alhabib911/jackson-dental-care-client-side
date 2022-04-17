import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
import './Header.css'
// import {signOut} from '../../Firebase.init/auth'
import { signOut } from 'firebase/auth';
import auth from '../../Firebase.init';


const Header = () => {
    const [user] =useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='logo'>
            <h3> <span>Jackson</span> Dental Care</h3>
            <div className="navigation-bar">
                <div className="left-area">
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/checkout'>Check Out</Link>
                    </nav>
                </div>
                <div className="right-area">
                    <nav>
                        {
                            user ?
                            <Link to='/login' className='sign-out-btn' onClick={handleSignOut}>Log out</Link>
                            :
                            <Link to='/login'>Login</Link>
                        }
                        {/* <Link to='/login'>Login</Link> */}
                        <Link to='/signup'>Sign Up</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;