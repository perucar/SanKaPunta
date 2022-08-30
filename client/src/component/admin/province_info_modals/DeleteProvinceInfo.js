import { Button, Modal } from "react-bootstrap";

function DeleteProvinceInfo(props) {

  
    const {handleClose, show, data} = props;
    const id = data.province_info_id;
    const handleDeleteProvinceInfo = async () => {
      const rawData = await fetch(`http://localhost:5050/provinceInfo/${id}`, {
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
          <Modal.Title>Delete province info</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this province info?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteProvinceInfo}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default DeleteProvinceInfo;