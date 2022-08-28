import { useEffect, useState } from "react";
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

    // Fields change handler    
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    /* Test fields if they are controlled */
    useEffect(() => {
        console.log(data);
    })
    
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
          <Button variant="primary" onClick={() => window.location.reload()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </>
     );
}

export default AddProvince;