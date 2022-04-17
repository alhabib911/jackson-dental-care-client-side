import React, {useState, useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services  = () => {
    const[service, setService] = useState([])

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='services'>
            {
               service.map(service=> <Service
                service={service}
               ></Service>) 
            }
        </div>
    );
};

export default Services;