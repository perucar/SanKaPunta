import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Spinner } from "react-bootstrap";

function AddRegions(props) {
    const {handleChange, handleClose, open} = props;
    const [data, setData] = useState({
        region_id: "",
        name: "",
        date_created: "",
        created_by: "",
        date_updated: "",
        updated_by: ""
    })
    console.log(data)
    

    return (    
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit region</DialogTitle>
        <DialogContent>
        <Form>
            <Form.Row sx={{width: "100%"}}>
            <Form.Group className="mb-3" controlId="formRegion">
            
        
          
         
    

            <Form.Label>Region Name</Form.Label>
            <Form.Control name="name" type="text" placeholder={data.name} value={data.name} onChange={(event) => {handleChange(event)}}/>

        
        
        
        
            
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

export default AddRegions;