import React, {useEffect, useState} from 'react'
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { compose, withProps } from 'recompose'

const Maps = (props) => {
  const provinces = props.provinces;
  return(
      <>
     <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 12.8797, lng: 121.7740 }}
            >

        {provinces?.map(val => {
          return (
            <Marker key={val.province_id}
            position={{ lat: val.latitude, lng: val.longitude }}
            onClick={() => {
               props.setSelectedCat(val)
            }}
           />
          )
        })}

      </GoogleMap>
      </>
  ) //end return

}

const Map = compose(
  withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key${process.env.REACT_APP_GOOGLE_API_KEY}=&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `90vh` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `80vh` }} />,

  }),
    withScriptjs,
    withGoogleMap

)(Maps);

export default Map
