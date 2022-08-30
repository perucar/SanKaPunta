import { /*useEffect,*/ useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddProvinceInfo(props) {
    const { show, handleClose, allData } = props;

    // State for data to be added
    const [data, setData] = useState({
        province_info_id: "",
        province_id: "",
        title: "",
        description: "",
        image: "",
        date_created: new Date(),
        created_by: "default",
        date_updated: new Date(),
        updated_by: "default"
    })

    // Fields change handler    
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    // Handle saving changes to region item
    const handleAddProvinceInfo = async () => {
        const dataToSend = {
            province_id: data.province_id,
          title: data.title,
          description: data.description,
          image: data.image,
          category_id: data.category_id,
          updated_by: /*Change to current user*/ "default",
          date_updated: new Date().toISOString().slice(0, 19).replace('T', ' '),
          created_by: /*Change to current user*/ "default",
          date_created: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
        const rawData = await fetch('http://localhost:5050/provinceInfo', {
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

    /* Test fields if they are controlled 
    useEffect(() => {
        console.log("alldata: ", allData);
    }) */
    
    return ( 
        allData.provinces !== undefined ?
        
        <>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Add province info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row sx={{width: "100%"}}>
                <Form.Group className="mb-3" controlId="formProvinceTitle">
                    <Form.Label>Province Info Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter province info title" value={data.title} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProvinceId">
                    <Form.Label>Province</Form.Label>
                    <Form.Control name="province_id" as="select" aria-label="Selection for regions" value={data.region_id} onChange={(event) => {handleChange(event)}}>
                        <option>Select a province...</option>
                       {allData.provinces.map(province => (
                        <option key={province.province_id} value={province.province_id}>{province.name}</option>
                       ))}
                    </Form.Control> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={10} name="description" type="text" placeholder="Enter the info description" value={data.latitude} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control name="image" type="text" placeholder="Enter the the info's image URL" value={data.longitude} onChange={(event) => {handleChange(event)}} autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name="category_id" as="select" aria-label="Selection for categories" value={data.category_id} onChange={(event) => {handleChange(event)}}>
                        <option>Select a province...</option>
                       {allData.categories.map(category => (
                        <option key={category.category_id} value={category.category_id}>{category.name}</option>
                       ))}
                    </Form.Control> 
                </Form.Group>
            </Form.Row>
        
        </Form>
        
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddProvinceInfo()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </>:

        <Modal>
            <Modal.Title>This is still loading</Modal.Title>
        </Modal>
     );
}

export default AddProvinceInfo;