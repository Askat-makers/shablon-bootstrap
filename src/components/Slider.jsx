import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import winter from '../img/winter.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img className="d-block w-100" src={winter} alt="Winter"/>
                <Carousel.Caption>
                    <h3>Makers BootCamp</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, error?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img className="d-block w-100" src={winter} alt="Winter"/>
                <Carousel.Caption>
                    <h3>Makers BootCamp</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, error?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img className="d-block w-100" src={winter} alt="Winter"/>
                <Carousel.Caption>
                    <h3>Makers BootCamp</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, error?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;