import { Button, Modal } from "react-bootstrap";

function DeleteCategory(props) {
    const {/*handleChange,*/ handleClose, show /*,data*/} = props;    

    return ( 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Delete category</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
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

export default DeleteCategory;