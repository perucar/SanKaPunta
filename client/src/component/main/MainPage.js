import React, { useState } from 'react';
import './../../css/mainPage.css';

// Navbar Components
import Logo from './../../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Sidebar Components
import Sidebar from './../../component/main/Sidebar';

const MainPage = () => {
    return (
    <>
    <header>
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
    </header>
    <main>
        {/* Insert Map Here */}
        <Sidebar />
    </main>
    <footer>
        <div className="main-footer typo-light">
            <Container>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="widget subscribe no-box">
                            <h5 className="widget-title">SAN KA PUNTA<span></span></h5>
                            <p>About the application, little description will go here.. </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="widget no-box">
                            <h5 className="widget-title">Quick Links<span></span></h5>
                            <ul className="thumbnail-widget">
                                <li>
                                    <div className="thumb-content"><a href="#.">&nbsp;Get Started</a></div> 
                                </li>
                                <li>
                                    <div className="thumb-content"><a href="#.">&nbsp;Top Locations</a></div> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="widget no-box">
                            <h5 className="widget-title">Follow up<span></span></h5>
                                <a href="#"> <i class="fa fa-facebook"> </i> </a>
                                <a href="#"> <i class="fa fa-twitter"> </i> </a>
                                <a href="#"> <i class="fa fa-youtube"> </i> </a>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Contact Us<span></span></h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div class="emailfield">
                            <input type="text" name="email" value="Email" />
                            <input name="uri" type="hidden" value="arabiantheme" />
                            <input name="loc" type="hidden" value="en_US" />
                            <input class="submitbutton ripplelink" type="submit" value="Subscribe" /> 
                        </div>
                    </div>
                </div>
                </div>
            </Container>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p>Copyright © 2022 San Ka Punta. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    
    )
}
    
export default MainPage;