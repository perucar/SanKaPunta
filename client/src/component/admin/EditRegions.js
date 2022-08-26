import { Dialog, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

function EditRegionsModal(props) {
    const {handleChange, handleClose, open, data} = props;
    console.log(data)
    

    return ( 
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit region</DialogTitle>
        <Form>
            <Form.Row>
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
    </Dialog>
     );
}

export default EditRegionsModal;