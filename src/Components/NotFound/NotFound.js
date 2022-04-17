import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <img src="https://imgix.bustle.com/uploads/image/2022/1/26/21a61361-2164-42c3-a0a2-862bd38d98fd-gettyimages-1268630795.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="" />
            <h1>Page Not Found</h1>
            <p>This page you looking for could not be found. It might <br />
             have removed, renamed or did not exist in the first place.</p>
             
        </div>
    );
};

export default NotFound;