import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddCategory(props) {
    const { show, handleClose } = props;

    // State for data to be added
    const [data, setData] = useState({
        category_id: "",
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


    return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row sx={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="formRegionName">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder={data.name} value={data.name} onChange={(event) => {handleChange(event)}} autoFocus/>
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

    
     );
}

export default AddCategory;