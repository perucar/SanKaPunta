import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import mockData from '../mockData';
import AddRegionsRB from "./region_modals/AddRegionsRB";
import DeleteRegions from "./region_modals/DeleteRegionsRB";
import EditRegions from "./region_modals/EditRegionsRB";
import '../../css/globalStyles.css';

function Regions() {

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);

    const [data, setData] = useState(mockData.regions);
    const [currentData, setCurrentData] = useState({});

    // Fetch data from DB
    useEffect(() => {
        fetch('http://localhost:5050/regions').then(info => info.json()).then(info => setData(info.regions))
    },[])

    const handleEditClose = () => {
        setEditOpen(false);
    }

    const handleEditOpen = () => {
        setEditOpen(true);
    }

    const handleDeleteOpen = () => {
        setDeleteOpen(true);
    }

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    }

    const handleAddOpen = () => {
        setAddOpen(true);
    }

    const handleAddClose = () => {
        setAddOpen(false);
    }

    const handleChange = (event) => {
        setCurrentData({...currentData, [event.target.name]: event.target.value});
        console.log(event.target.value);
    }

    return ( 
        <>
        
        <Row>
            <Col style={{paddingBottom: '1em'}}>
            <h2 style={{padding: 0}}>Regions</h2>
            </Col>
            <Col className="d-flex justify-content-end">
            <Button style={{height: '3em'}} variant="primary" onClick={handleAddOpen}>Add</Button>
            </Col>
     
        </Row>

        <Row className="table-row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Region ID</th>
              <th>Region Name</th>
              <th>Created by</th>
              <th>Date Created</th>
              <th>Updated by</th> 
              <th>Date Updated</th>
              <th>Edit Item</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
           {data.map((region) => {
            return (
                <tr key={region.region_id}>
                    <td>{region.region_id}</td>
                    <td>{region.name}</td>
                    <td>{region.created_by}</td>
                    <td>{region.date_created}</td>
                    <td>{region.updated_by}</td>
                    <td>{region.date_updated}</td>
                    <td><IconButton aria-label="edit" color="success" className="IconButton" onClick={() => {
                        handleEditOpen();
                        setCurrentData(region)
                        }} >
                        <Edit />
                        </IconButton>
                    </td>

                    <td><IconButton aria-label="edit" color="error" className="IconButton" onClick={() => {
                        setCurrentData(region);
                        handleDeleteOpen();
                        
                    }} >
                        <Delete />
                        </IconButton>
                    </td>
                </tr>
            )
           })}
          </tbody>
        </Table>
        </Row>

        

        {/* For testing - migration from MUI to React Bootstrap */}
        <AddRegionsRB handleClose={handleAddClose} show={addOpen} />

        <EditRegions handleClose={handleEditClose} show={editOpen} data={currentData} handleChange={handleChange} />
        <DeleteRegions handleClose={handleDeleteClose} show={deleteOpen} data={currentData} />
        
        {/*
                <AddRegions handleClose={handleAddClose} open={addOpen} />

         */}
        </>
     );
}

export default Regions;