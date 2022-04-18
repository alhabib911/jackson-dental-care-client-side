import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
import './Header.css'
// import {signOut} from '../../Firebase.init/auth'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className='navbar-container' collapseOnSelect expand="lg">
            <Container className='navigation'>
                <Link className='logo' to='/'><span>Jackson</span> Dental Care</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/aboutme'>About Me</Link>
                        </Nav>
                        <Nav className='login-form'>
                            {
                                user ?
                                    <Link to='/login' className='sign-out-btn' onClick={handleSignOut}>Log out</Link>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                            <Link to='/signup'>Sign Up</Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;