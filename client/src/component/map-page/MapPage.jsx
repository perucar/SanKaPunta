import React, {useState} from 'react'
import {useQuery} from '@apollo/client';
import { LOAD_DATA } from './../../graphql/Queries'
import Map from './../map/Map';
import elnido from './../../images/palawan.jpg'

const MapPage = () => {

    const {error, loading, data} = useQuery(LOAD_DATA);
    const [selectedCat, setSelectedCat] = useState(null)

    const testLink = 'https://www.discoverthephilippines.com/wp-content/uploads/2021/12/article-cover-photo-guide-batangas-city.jpg'

  return (
    <>
        <div className="row mt-2 mr-2">
            <div className="col-md-3">

                <div className="card" style={{ width: "18rem;"}}>
                <img src={testLink} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>Province Name:</h5> <span className='card-text text-center'>{selectedCat?.name}</span><hr />
                    <h5>Region:<span className='card-text'> 1</span></h5> 
                    <h5>Category:</h5> <span className='card-text'>Test category</span>
                    <h5>Visit:</h5> <span className='card-text'><a href="#">This site</a></span>
                    <h5>Description:</h5> <span className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum dolorum culpa dignissimos optio non quod ipsam error nesciunt, maiores vitae ex corporis, hic veritatis!</span>
                    
                </div>
                </div>
                
            </div>
            <div className="col-md-9">
            <div style={{ width: "100vw", height: "100vh" }}>
                <Map 
                provinces={data} 
                setSelectedCat={setSelectedCat}
                selectedCat={selectedCat}
                />
            </div>
            </div>
        </div>
    </>
  )
}

export default MapPage