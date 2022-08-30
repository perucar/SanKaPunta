import React, {useState, useEffect} from 'react'
import './../../css/landingPage.css';
import HeroSection from './HeroSection';

// Navbar Components
import Logo from './../../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const LandingPage = () => {
  return (
    <>

<Navbar collapseOnSelect className="color-nav" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <img src={Logo} width="auto" height="60px" className="d-inline-block align-top" alt="San Ka Punta - Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" >
                    <Nav>
                        <Form className="form-center">
                            <InputGroup className="mb-3">
                                <Form.Control type="search" placeholder="Search" aria-label="Search" className="search-bar"/>
                                <Button variant="dark">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </InputGroup>
                        </Form>
                    </Nav>
                    <Nav.Link href="#login-signup">Login / SignUp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    <HeroSection />

    </>
  )
}

export default LandingPage;