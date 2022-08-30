import { Button, Form, Modal, Spinner } from "react-bootstrap";

function EditCategory(props) {
    const {handleChange, handleClose, show, data} = props;
    
  // Handle saving changes to region item
  const handleEditProvinceInfo = async () => {
    const dataToSend = {
      id: data.category_id,
      name: data.name,
      updated_by: /*Change to current user*/ "default",
      date_updated: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
    const rawData = await fetch('http://localhost:5050/categories', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })

    const transformedData = await rawData.json();
    console.log(transformedData);

    // Put appropriate action based on s  tatus received
    if (transformedData.status === '200') {
      window.location.reload();
    } else {
      alert("Item did not update. Please try again.")
    }
  }

    return ( 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Edit category</Modal.Title>
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
            <Form.Label>Category ID</Form.Label>
            <Form.Control name="category_id" type="text" value={data.category_id}  disabled />

            <Form.Label>Category Name</Form.Label>
            <Form.Control name="name" type="text" placeholder={data.name} value={data.name} onChange={(event) => {handleChange(event)}}/>

            <Form.Label>Created by</Form.Label>
            <Form.Control  name="name" type="text" placeholder={data.created_by} disabled/>
            
            <Form.Label>Date created</Form.Label>
            <Form.Control name="name" type="text" placeholder={data.date_created} disabled/>

            <Form.Label>Updated by</Form.Label>
            <Form.Control name="name" type="text" placeholder={data.updated_by} disabled/>

            <Form.Label>Date updated</Form.Label>
            <Form.Control name="name" type="text" placeholder={data.date_updated} disabled/>
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
          <Button variant="primary" onClick={() => handleEditProvinceInfo()}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default EditCategory;