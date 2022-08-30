import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import mockData from '../mockData';
import '../../css/globalStyles.css';
import AddProvinceInfo from "./province_info_modals/AddProvinceInfo";
import EditProvinceInfo from "./province_info_modals/EditProvinceInfo";
import DeleteProvinceInfo from "./province_info_modals/DeleteProvinceInfo";

function ProvinceInfo() {

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);

    const [data, setData] = useState(mockData);
    const [currentData, setCurrentData] = useState({});

    // Fetch data from DB
    useEffect(() => {
        fetch('http://localhost:5050/provinceInfo').then(info => info.json()).then(info => setData({...data, province_info: info.province_infos}))
    },[])

     useEffect(() => {
        fetch('http://localhost:5050/provinces').then(info => info.json()).then(info => console.log({...data, provinces: info.provinces}))
    },[data.province_info])

    
    

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

        //console.log(event.target.value);
    }

    return ( 
        <>
        <Row>
            <Col style={{paddingBottom: '1em'}}>
            <h2 style={{padding: 0}}>Province Information</h2>
            </Col>
            <Col className="d-flex justify-content-end">
            <Button style={{height: '3em'}} variant="primary" onClick={handleAddOpen}>Add</Button>
            </Col>
     
        </Row>

        <Row className="table-row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Province Info ID</th>
              <th>Province ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Category ID</th>
              <th>Created by</th>
              <th>Date Created</th>
              <th>Updated by</th> 
              <th>Date Updated</th>
              <th>Edit Item</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
           {data.province_info.map((info) => {
            return (
                <tr key={info.province_info_id}>
                    <td>{info.province_info_id}</td>
                    <td>{info.province_id}</td>
                    <td>{info.title}</td>
                    <td>{info.description.slice(0, 25) + "..."}</td>
                    <td>{info.image.slice(0, 25) + "..."}</td>
                    <td>{info.category_id}</td>
                    <td>{info.created_by}</td>
                    <td>{info.date_created}</td>
                    <td>{info.updated_by}</td>
                    <td>{info.date_updated}</td>
                    <td><IconButton aria-label="edit" color="success" className="IconButton" onClick={() => {
                        handleEditOpen();
                        setCurrentData(info)
                        }} >
                        <Edit />
                        </IconButton>
                    </td>

                    <td><IconButton aria-label="edit" color="error" className="IconButton" onClick={() => {
                        handleDeleteOpen();
                        setCurrentData(info);
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

        

        {/* For testing - migration from MUI to React Bootstrap */ }
        <AddProvinceInfo allData={data} handleClose={handleAddClose} show={addOpen} />
        

        <EditProvinceInfo handleClose={handleEditClose} show={editOpen} data={currentData} handleChange={handleChange} allData={data} />
        <DeleteProvinceInfo handleClose={handleDeleteClose} show={deleteOpen} data={currentData} />
        </>
     );
}

export default ProvinceInfo;