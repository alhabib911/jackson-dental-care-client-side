import React from 'react';
import { useParams } from 'react-router-dom';
import useService from '../hook/useService';
import Service from '../Service/Service';
import './Checkout.css'


const Checkout = () => {

    const {checkoutId} = useParams() 
    console.log(checkoutId);
    const [service, setService] = useService()


    return (
        <div className='checkin-container'>
            <h3 className='service-details'>id: {checkoutId}</h3>
            
        </div>
    );
};

export default Checkout;

