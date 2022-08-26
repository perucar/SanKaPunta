import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Table } from "react-bootstrap";
import mockData from '../mockData';
import EditRegionsModal from "./EditRegions";

function Regions() {

    const [editOpen, setEditOpen] = useState(false);
    const [data, setData] = useState(mockData);
    const [currentData, setCurrentData] = useState(undefined);

    const handleEditClose = () => {
        setEditOpen(false);
    }

    const handleEditOpen = () => {
        setEditOpen(true);
    }

    const handleChange = (event) => {
        setCurrentData({...currentData, [event.target.name]: event.target.value});
        console.log(event.target.value);
    }

    return ( 
        <>
        <h1>Regions</h1>

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
           {data.regions.map((region) => {
            return (
                <tr key={region.region_id}>
                    <td>{region.region_id}</td>
                    <td>{region.name}</td>
                    <td>{region.created_by}</td>
                    <td>{region.date_created}</td>
                    <td>{region.updated_by}</td>
                    <td>{region.date_updated}</td>
                    <td><IconButton aria-label="edit" color="primary" onClick={() => {
                        handleEditOpen();
                        setCurrentData(region)
                        }} >
                        <Edit />
                        </IconButton>
                    </td>

                    <td><IconButton aria-label="edit" color="primary" >
                        <Delete />
                        </IconButton>
                    </td>
                </tr>
            )
           })}
          </tbody>
        </Table>

        <EditRegionsModal handleClose={handleEditClose} open={editOpen} data={currentData} handleChange={handleChange} />
        </>
     );
}

export default Regions;