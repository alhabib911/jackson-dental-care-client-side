import React from 'react';
import './AboutMe.css'
import habib from '../../images/Habib.jpg'

const AboutMe = () => {
    return (
        <div className='about-container'>
            <img src={habib} alt="" />
            <h3>Abdullah Al Habib</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, commodi!</p>
        </div>
    );
};

export default AboutMe;