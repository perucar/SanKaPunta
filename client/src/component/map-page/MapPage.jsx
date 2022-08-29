import React, {useState} from 'react'
import Map from './../map/Map';

const MapPage = (props) => {

    
    const [selectedCat, setSelectedCat] = useState(null)

    const testLink = 'https://www.discoverthephilippines.com/wp-content/uploads/2021/12/article-cover-photo-guide-batangas-city.jpg'

  return (
    <>
        <div className="row mt-2 mr-2">
            <div className="col-md-3">

                <div className="card" style={{ width: "18rem;"}}>
                <img src={selectedCat?.image ? selectedCat?.image : "https://discountseries.com/wp-content/uploads/2017/09/default.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>Province Name:</h5> <span className='card-text text-center'>{selectedCat?.name}</span><hr />
                    <h5>Region ID:<span className='card-text'>{selectedCat?.region_id}</span></h5> 
                    <h5>Category:</h5> <span className='card-text'>Test category</span>
                    <h5>Visit:</h5> <span className='card-text'><a href="#">This site</a></span>
                    <h5>Description:</h5> <span className='card-text'>{selectedCat?.description}</span>
                    
                </div>
                </div>
                
            </div>
            <div className="col-md-9">
            <div style={{ width: "70vw", height: "100vh" }}>
                <Map 
                provinces={props.data} 
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