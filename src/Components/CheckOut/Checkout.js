import React from 'react';
import { useParams } from 'react-router-dom';
import useService from '../hook/useService';
import Service from '../Service/Service';
import './Checkout.css'


const Checkout = () => {
    const {checkoutId} = useParams() 
    console.log(checkoutId);
    const [services, setService] = useService()
    // console.log(services);
    const singleService = services.find((service)=>service.id==checkoutId)
    console.log(singleService);
    return (
        <div className='checkin-container'>  
            <div>
                <h4>Service Name: {singleService?.service}</h4>
                <p>Service Details: {singleService?.details}</p>
                <h5>Price: {singleService?.price} <span>BDT</span></h5>
            </div>
        </div>
    );
};

export default Checkout;

