import { Button, Modal } from "react-bootstrap";

function DeleteProvinceInfo(props) {
    const {handleClose, show, data} = props;
    
    return ( 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Delete province info</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this province info?</Modal.Body>
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

export default DeleteProvinceInfo;