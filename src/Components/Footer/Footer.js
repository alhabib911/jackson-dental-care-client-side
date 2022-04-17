import React from 'react';
import './Footer.css'

const Footer = () => {
    const today =new Date()
    const year =today.getFullYear()
    return (
        <footer>
            <p>Copyright © {year} by <span>Jackson Dental Care</span>. All rights reserved.</p>
        </footer>
    );
};

export default Footer;