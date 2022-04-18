import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, service, image, details, price } = props.service
    const navigate = useNavigate()
    const navigateToServiceDetails = id => {
        navigate(`/checkout/${id}`)
    }

    return (
        <div className='service-container'>
            
            <div className="service">
                <img src={image} alt="" />
                <h4>Service: {service}</h4>
                <p>Service Details: {details}</p>
                <h5>Service Fee:  {price}<small>BDT</small></h5>
                <button onClick={ ()=> navigateToServiceDetails (id)}>Add to cart</button>
            </div>
         </div>
    );
};

export default Service;