import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, Modal, ModalBody, Nav, Navbar } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link{
        color: #adb1b8;
        &:hover{
            color: white
        }
    } 
`


const Navibar = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Web Dev</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>
                                <Button variant="primary" onClick={handleShow}>Sign Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share you email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        
                        </Form.Group>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default Navibar;