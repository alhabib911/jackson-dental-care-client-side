import React from 'react';
import './Banner.css'

// import banner1 from '../../../images/image1.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        // <div className='banner'>
        //     <img src={banner1} alt="" />            
        // </div>
        <div>
            <Carousel className='banner'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://aadhyadentalcare.com/assets/images/Banner.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Care For Lifetime</h3>
                        <p>Let Us Brighten Your Smile</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.hpph.ca/en/resources/Banner-HealthMatters-Dental.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Committed To Excellence</h3>
                        <p>Personalized & Comfortable</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.youramericandentalcare.com/assets/images/implants-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Care For Your Smile</h3>
                        <p>Committed To Excellence</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;