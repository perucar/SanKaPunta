import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Button, Form, Modal, Spinner } from "react-bootstrap";

function DeleteRegions(props) {
    const {handleChange, handleClose, show, data} = props;
    console.log(data)
    

    return ( 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Delete region</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this region?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default DeleteRegions;