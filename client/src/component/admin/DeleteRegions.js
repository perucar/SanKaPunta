import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Button } from "react-bootstrap";

function DeleteRegions(props) {
    const { handleClose, open, data } = props;
    console.log(data)
    

    return ( 
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit region</DialogTitle>
        <DialogContent>
            <p>Are you sure you want to delete this region?</p>
        </DialogContent>

        <DialogActions>
            <Button variant="alert" onClick={handleClose}>
                Delete
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Cancel
            </Button>
        </DialogActions>
        
    </Dialog>
     );
}
export default DeleteRegions;
