import React, {useState, useEffect} from 'react'
import './../../css/landingPage.css';
<<<<<<< HEAD
import HeroSection from './HeroSection';
// import Cards from './Cards';

// Navbar Components
import Logo from './../../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
=======
import LoginForm from './../login-modal/LoginForm';

import Carousel from '../carousel/Carousel';
import Navbar from './../navbar/Navbar';
import MapPage from '../map-page/MapPage';
import { LOAD_DATA, GET_FILTERED_CITY } from './../../graphql/Queries'
import {useQuery} from '@apollo/client';

>>>>>>> 1df6f08a7e6eaadaeae75d31081d14901f6b838f

const LandingPage = () => {

  const [cat, setCat] = useState('')

  const {error, loading, data: loadData} = useQuery(LOAD_DATA);

  const { refetch, data: getFilteredCity } = useQuery(
    GET_FILTERED_CITY, {
      variables: { input: cat },
      skip: cat === ''
    }
  )

  const marker = cat === '' ? loadData?.getProvinces : getFilteredCity?.getProvinceByName;

  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    setProvinces(loadData);
    console.log("marker here",marker)
  }, [loadData])

  const handleSelection = (city) => {
   refetch({
      variables: { input: city}
    });
    console.  log("filtered city")

    setCat(city);
    // alert(city);
  }

  return (
    <>
<<<<<<< HEAD
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
        {/* <Cards />  */}
        <section id="locations">
            <div className="container">
                <div className="row">
                    <div className="col-12 section-intro text-center">
                        <h5>Check Out The Philippines Culture</h5>
                    </div>
                </div>
            </div>
        </section>
=======
    {/* {console.log(data)} */}
    <Navbar mapData={loadData} changeCat={handleSelection} />
    <MapPage data={marker}/>
    <Carousel />
    <LoginForm />
>>>>>>> 1df6f08a7e6eaadaeae75d31081d14901f6b838f

    </>
  )
}

export default LandingPage;