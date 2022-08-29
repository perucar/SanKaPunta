import { Button, Modal } from "react-bootstrap";

function DeleteRegions(props) {
    const {/*handleChange,*/ handleClose, show, data} = props;
    console.log(props.data)
    const id = data.region_id;   

    const handleDeleteRegion = async () => {
      const rawData = await fetch(`http://localhost:5050/regions/${id}`, {
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
          <Modal.Title>Delete region</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this region?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteRegion}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export default DeleteRegions;