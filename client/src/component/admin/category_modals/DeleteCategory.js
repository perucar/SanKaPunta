import { Button, Modal } from "react-bootstrap";

function DeleteCategory(props) {
    const {/*handleChange,*/ handleClose, show, data} = props;    

    const id = data.category_id;
    const handleDeleteCategory = async () => {
      const rawData = await fetch(`http://localhost:5050/categories/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
      })

      const transformedData = await rawData.json();
      console.log(transformedData);

      // Put appropriate action based on status received
      if (transformedData.status === '200') {
        window.location.reload();
      } else {
        alert("Item did not update. Please try again.")
      }
    }

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
          <Button variant="danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default DeleteCategory;