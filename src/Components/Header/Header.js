import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import './Header.css'


const Header = () => {
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
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;