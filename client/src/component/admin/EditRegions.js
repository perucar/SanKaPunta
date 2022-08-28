import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Button, Form, Spinner } from "react-bootstrap";

function EditRegionsModal(props) {
    const {handleChange, handleClose, open, data} = props;
    console.log(data)
    

    return ( 
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit region</DialogTitle>
        <DialogContent>
        <Form>
            <Form.Row sx={{width: "100%"}}>
            <Form.Group className="mb-3" controlId="formRegion">
            
        
            {data === undefined || data === null ?
            <>
                <Spinner />
            </>
            :
            <>
            <Form.Label>Region ID</Form.Label>
            <Form.Control name="region_id" type="text" value={data.region_id}  disabled />

            <Form.Label>Region Name</Form.Label>
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
        </DialogContent>

        <DialogActions>
            <Button variant="primary" onClick={handleClose}>
                Save
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </DialogActions>
        
    </Dialog>
     );
}

export default EditRegionsModal;