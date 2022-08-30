import React, {useState, useEffect} from 'react'
import './../../css/landingPage.css';
import LoginForm from './../login-modal/LoginForm';

import Carousel from '../carousel/Carousel';
import Navbar from './../navbar/Navbar';
import MapPage from '../map-page/MapPage';
import { LOAD_DATA, GET_FILTERED_CITY } from './../../graphql/Queries'
import {useQuery} from '@apollo/client';


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
    {/* {console.log(data)} */}
    <Navbar mapData={loadData} changeCat={handleSelection} />
    <MapPage data={marker}/>
    <Carousel />
    <LoginForm />

    </>
  )
}

export default LandingPage;