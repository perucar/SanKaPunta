import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import mockData from '../mockData';
import AddRegions from "./AddRegions";
import AddRegionsRB from "./region_modals/AddRegionsRB";
import DeleteRegions from "./region_modals/DeleteRegionsRB";
import EditRegionsModal from "./EditRegions";
import EditRegions from "./region_modals/EditRegionsRB";
import '../../css/globalStyles.css';
import AddProvince from "./province_modals/AddProvince";
import EditProvince from "./province_modals/EditProvince";
import DeleteProvince from "./province_modals/DeleteProvince";

function Provinces() {

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);

    const [data, setData] = useState(mockData);
    const [currentData, setCurrentData] = useState(undefined);

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
            <h2 style={{padding: 0}}>Provinces/Cities</h2>
            </Col>
            <Col className="d-flex justify-content-end">
            <Button style={{height: '3em'}} variant="primary" onClick={handleAddOpen}>Add</Button>
            </Col>
     
        </Row>

        <Row className="table-row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Province ID</th>
              <th>Region ID</th>
              <th>Name</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Created by</th>
              <th>Date Created</th>
              <th>Updated by</th> 
              <th>Date Updated</th>
              <th>Edit Item</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
           {data.provinces.map((province) => {
            return (
                <tr key={province.province_id}>
                  <td>{province.province_id}</td>
                    <td>{province.region_id}</td>
                    <td>{province.name}</td>
                    <td>{province.latitude}</td>
                    <td>{province.longitude}</td>
                    <td>{province.created_by}</td>
                    <td>{province.date_created}</td>
                    <td>{province.updated_by}</td>
                    <td>{province.date_updated}</td>
                    <td><IconButton aria-label="edit" color="success" className="IconButton" onClick={() => {
                        handleEditOpen();
                        setCurrentData(province)
                        }} >
                        <Edit />
                        </IconButton>
                    </td>

                    <td><IconButton aria-label="edit" color="error" className="IconButton" onClick={() => {
                        handleDeleteOpen();
                        setCurrentData(province);
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
        <AddProvince regions={data.regions} handleClose={handleAddClose} show={addOpen} />

        <EditProvince handleClose={handleEditClose} show={editOpen} data={currentData} handleChange={handleChange} />
        <DeleteProvince handleClose={handleDeleteClose} show={deleteOpen} data={currentData} />
        
        {/*
                <AddRegions handleClose={handleAddClose} open={addOpen} />

         */}
        </>
     );
}

export default Provinces;