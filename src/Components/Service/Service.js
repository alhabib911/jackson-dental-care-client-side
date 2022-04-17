import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { service, image, details, price } = props.service

    const handleAddToCart = (service) => {
        console.log('clicked');
    }

    return (
        <div className='service-container'>
            
            <div className="service">
                <img src={image} alt="" />
                <h4>Service: {service}</h4>
                <p>Service Details: {details}</p>
                <h5>Service Fee:  {price}<small>BDT</small></h5>
                <Link onClick={handleAddToCart} to='/checkout'>Add to cart</Link>
            </div>
         </div>
    );
};

export default Service;