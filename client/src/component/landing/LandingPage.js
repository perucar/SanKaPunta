import React, {useState} from 'react'
import './../../css/landingPage.css';
import LoginForm from './../login-modal/LoginForm';
import albay from './../../images/img-Albay.jpg';
import elnido from './../../images/img-El-Nido.jpg';
import Carousel from '../carousel/Carousel';
import { WindowSharp } from '@mui/icons-material';
import Navbar from './../navbar/Navbar';
import MapPage from '../map-page/MapPage';


const LandingPage = () => {



  return (
    <>
  
    <Navbar />
    <MapPage />
    <Carousel />
    <LoginForm />

    </>
  )
}

export default LandingPage;