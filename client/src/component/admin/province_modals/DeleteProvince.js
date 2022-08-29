import { Button, Modal } from "react-bootstrap";

function DeleteProvince(props) {
    const {handleClose, show, data} = props;
    const id = data.province_id;

    const handleDeleteProvince = async () => {
      const rawData = await fetch(`http://localhost:5050/provinces/${id}`, {
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
        alert("Item not deleted. Please try again.")
      }
    }
    
    return ( 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton={false}>
          <Modal.Title>Delete province</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this province?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteProvince}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default DeleteProvince;