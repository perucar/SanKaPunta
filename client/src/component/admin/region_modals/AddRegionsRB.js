import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddRegionsRB(props) {
    const { show, handleClose } = props;

    // State for data to be added
    const [data, setData] = useState({
        region_id: "",
        name: "",
        date_created: "",
        created_by: "",
        date_updated: "",
        updated_by: ""
    })

    // Fields change handler    
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    // Handle saving changes to region item
    const handleAddRegion = async () => {
      const dataToSend = {
        name: data.name,
        id: data.region_id,
        updated_by: /*Change to current user*/ "default",
        date_updated: new Date().toISOString().slice(0, 19).replace('T', ' '),
        created_by: /*Change to current user*/ "default",
        date_created: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
      const rawData = await fetch('http://localhost:5050/regions', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      })

      const transformedData = await rawData.json();
      console.log(transformedData);

      // Put appropriate action based on status received
      if (transformedData.status === '200') {
        window.location.reload();
      } else {
        alert("Item was not created. Please try again.")
      }
    }


    return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Add region</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row sx={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="formRegionName">
                    <Form.Label>Region Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder={data.name} value={data.name} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>
            </Form.Row>
        
        </Form>
        
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddRegion()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    
     );
}

export default AddRegionsRB;