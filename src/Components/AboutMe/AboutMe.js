import React from 'react';
import './AboutMe.css'
import habib from '../../images/Habib.jpg'

const AboutMe = () => {
    return (
        <div className='about-container'>
            <img src={habib} alt="" />
            <h3>Abdullah Al Habib</h3>
            <p>The next 5 months are very important for me as a learner developer. In the next 5 months(this days) I want to make some live websites through Reactjs. Then I want to build some  websites with Backend through NodeJs and Mongobd. I want to solve minimum 50+ problem to become an expert in problem solving. As a part of job preparation, I would like to clear the basic concept of JavaScript better.Moreover, my main goal is to prepare myself for a job or internship in a foreign company as a professional web developer.</p>
        </div>
    );
};

export default AboutMe;