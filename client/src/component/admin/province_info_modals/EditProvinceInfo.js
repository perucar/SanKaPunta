import { useEffect } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";

function EditProvinceInfo(props) {
    const {handleChange, handleClose, show, data, allData} = props;

    /* Test if components are controlled */
    useEffect(() => {
        console.log(data)
    }, [data])
    // Handle saving changes to region item
    const handleEditProvinceInfo = async () => {
      const dataToSend = {
        name: data.name,
        province_info_id: data.province_info_id,
        province_id: data.province_id,
        title: data.title,
        description: data.description,
        image: data.image,
        category_id: data.category_id,
        updated_by: /*Change to current user*/ "default",
        date_updated: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
      const rawData = await fetch('http://localhost:5050/provinceInfo', {
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
          <Modal.Title>Edit province info</Modal.Title>
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

            <Form.Label>Province Info ID</Form.Label>
            <Form.Control name="province_info_id" type="number" value={data.province_info_id}  disabled />
            
            <Form.Group className="mb-3" controlId="formProvince">
                <Form.Label>Province</Form.Label>
                <Form.Control name="province_id" as="select" aria-label="Selection for province" value={data.province_id} onChange={(event) => {handleChange(event)}}>
                        <option>Select a province...</option>
                       {allData.provinces.map(province => (
                        <option key={province.province_id} value={province.province_id}>{province.name}</option>
                    ))}
                </Form.Control> 
            </Form.Group>

            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" value={data.title} onChange={(event) => {handleChange(event)}}/>

            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={10} name="description" type="text" value={data.description} onChange={(event) => {handleChange(event)}}/>

            <Form.Label>Image URL</Form.Label>
            <Form.Control  name="image" type="text" value={data.image} onChange={(event) => {handleChange(event)}}/>

            <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control name="category_id" as="select" aria-label="Selection for categories" value={data.category_id} onChange={(event) => {handleChange(event)}}>
                        <option>Select a category...</option>
                       {allData.categories.map(category => (
                        <option key={category.category_id} value={category.category_id}>{category.name}</option>
                    ))}
                </Form.Control> 
            </Form.Group>

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
          <Button variant="primary" onClick={() => handleEditProvinceInfo()}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default EditProvinceInfo;