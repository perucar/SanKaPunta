import { /*useEffect,*/ useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddProvince(props) {
    const { show, handleClose, regions } = props;

    
    // State for data to be added
    const [data, setData] = useState({
        province_id: "",
        region_id: "",
        name: "",
        latitude: "",
        longitude: "",
        date_created: new Date(),
        created_by: "default",
        date_updated: new Date(),
        updated_by: "default"
    })

    useEffect(() => {
        console.log(data)
        console.log(parseInt(data.region_id))
    }, [data])

    // Fields change handler    
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    // Handle saving changes to region item
    const handleAddProvince = async () => {
        const dataToSend = {
          name: data.name,
          region_id: parseInt(data.region_id),
          latitude: data.latitude,
          longitude: data.longitude,
          updated_by: /*Change to current user*/ "default",
          date_updated: new Date().toISOString().slice(0, 19).replace('T', ' '),
          created_by: /*Change to current user*/ "default",
          date_created: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
        const rawData = await fetch('http://localhost:5050/provinces', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dataToSend)
        })
  
        const transformedData = await rawData.json();
        console.log(transformedData);
  
        // Put appropriate action based on status received
        if (transformedData.message.status === '200') {
          window.location.reload();
        } else {
          alert("Item was not created. Please try again.")
        }
      }
  
    /* Test fields if they are controlled 
    useEffect(() => {
        console.log(data);
    })
    */
    
    return ( 
        <>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Add region</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row sx={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="formProvinceName">
                    <Form.Label>Province Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter province name" value={data.name} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegionId">
                    <Form.Label>Region</Form.Label>
                    <Form.Control name="region_id" as="select" aria-label="Selection for regions" value={data.region_id} onChange={(event) => {handleChange(event)}}>
                        <option>Select a region...</option>
                       {regions.map(region => (
                        <option key={region.region_id} value={region.region_id}>{region.name}</option>
                       ))}
                    </Form.Control> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLatitude">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control name="latitude" type="text" placeholder="Enter the location's latitude" value={data.latitude} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLongitude">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control name="longitude" type="text" placeholder="Enter the location's longitude" value={data.longitude} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>
            </Form.Row>
        
        </Form>
        
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddProvince()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </>
     );
}

export default AddProvince;