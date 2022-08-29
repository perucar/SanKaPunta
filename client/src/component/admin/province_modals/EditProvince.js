import { Button, Form, Modal, Spinner } from "react-bootstrap";

function EditProvince(props) {
    const {handleChange, handleClose, show, data} = props;
  
    return ( 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Edit province</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row sx={{width: "100%"}}>
            <Form.Group className="mb-3" controlId="formRegion">
            
        
            {data === undefined || data === null ?
            <>
                <Spinner />
            </>
            :
            <>

            <Form.Label>Province ID</Form.Label>
            <Form.Control name="province_id" type="text" value={data.province_id}  disabled />
            
            <Form.Label>Region ID</Form.Label>
            <Form.Control name="region_id" type="text" value={data.region_id}  disabled />

            <Form.Label>Province Name</Form.Label>
            <Form.Control name="name" type="text" placeholder={data.name} value={data.name} onChange={(event) => {handleChange(event)}}/>

            <Form.Label>Latitude</Form.Label>
            <Form.Control name="latitude" type="text" placeholder={data.latitude} value={data.latitude} onChange={(event) => {handleChange(event)}}/>

            <Form.Label>Longitude</Form.Label>
            <Form.Control name="longitude" type="text" placeholder={data.longitude} value={data.longitude} onChange={(event) => {handleChange(event)}}/>

            <Form.Label>Created by</Form.Label>
            <Form.Control  name="created_by" type="text" placeholder={data.created_by} disabled/>
            
            <Form.Label>Date created</Form.Label>
            <Form.Control name="date_created" type="text" placeholder={data.date_created} disabled/>

            <Form.Label>Updated by</Form.Label>
            <Form.Control name="updated_by" type="text" placeholder={data.updated_by} disabled/>

            <Form.Label>Date updated</Form.Label>
            <Form.Control name="date_updated" type="text" placeholder={data.date_updated} disabled/>
            </>
        
        
        }
            
        </Form.Group>
            </Form.Row>
        
    </Form>
        
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default EditProvince;