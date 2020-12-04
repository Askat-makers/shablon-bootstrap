import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Slider from './components/Slider'
import winter from './img/winter.jpg'
import Jumbotron from './components/Jumbotron'

const Home = () => {
    return (
        <>
            <Slider />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={winter} alt='photo' />
                            <Card.Body>
                                <Card.Title>Web dev</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quos?
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={winter} alt='photo' />
                            <Card.Body>
                                <Card.Title>Web dev</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quos?
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={winter} alt='photo' />
                            <Card.Body>
                                <Card.Title>Web dev</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quos?
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={winter} alt='photo' />
                            <Card.Body>
                                <Card.Title>Web dev</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quos?
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron />
            <Container style={{marginBottom: "30px"}}>
                <Row>
                    <Col md={7}>
                        <img src={winter} height={400} alt="aaa"/>
                    </Col>
                    <Col md={5}>
                        <h2>Makers Bootcamp</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit harum quaerat molestias aperiam dolorum itaque ducimus quasi ipsum ratione.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home; 