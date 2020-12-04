import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import winter from '../img/winter.jpg'
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo{
        background: url(${winter}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Makers Bootcamp</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit harum quaerat molestias aperiam dolorum itaque ducimus quasi ipsum ratione.</p>
                </Container>
            </Jumbo>
        </Styles>
    );
};

export default Jumbotron;