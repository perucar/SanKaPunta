import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import mockData from '../mockData';
import '../../css/globalStyles.css';
import AddCategory from "./category_modals/AddCategory";
import EditCategory from "./category_modals/EditCategory";
import DeleteCategory from "./category_modals/DeleteCategory";

function Category() {

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);

    const [data, setData] = useState(mockData.categories);
    const [currentData, setCurrentData] = useState({});

    // Fetch data from DB
    useEffect(() => {
        fetch('http://localhost:5050/categories').then(info => info.json()).then(info => setData(info))
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
        //console.log(event.target.value);
    }

    return ( 
        <>
        <Row>
            <Col style={{paddingBottom: '1em'}}>
            <h2 style={{padding: 0}}>Categories</h2>
            </Col>
            <Col className="d-flex justify-content-end">
            <Button style={{height: '3em'}} variant="primary" onClick={handleAddOpen}>Add</Button>
            </Col>
     
        </Row>

        <Row className="table-row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category ID</th>
              <th>Name</th>
              <th>Created by</th>
              <th>Date Created</th>
              <th>Updated by</th> 
              <th>Date Updated</th>
              <th>Edit Item</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
           {data.map((category) => {
            return (
                <tr key={category.category_id}>
                    <td>{category.category_id}</td>
                    <td>{category.name}</td>
                    <td>{category.created_by}</td>
                    <td>{category.date_created}</td>
                    <td>{category.updated_by}</td>
                    <td>{category.date_updated}</td>
                    <td><IconButton aria-label="edit" color="success" className="IconButton" onClick={() => {
                        handleEditOpen();
                        setCurrentData(category)
                        }} >
                        <Edit />
                        </IconButton>
                    </td>

                    <td><IconButton aria-label="edit" color="error" className="IconButton" onClick={() => {
                        handleDeleteOpen();
                        setCurrentData(category);
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
        <AddCategory allData={data} handleClose={handleAddClose} show={addOpen} />
        <EditCategory handleClose={handleEditClose} show={editOpen} data={currentData} handleChange={handleChange} allData={data} />
        <DeleteCategory handleClose={handleDeleteClose} show={deleteOpen} data={currentData} />
        </>
     );
}

export default Category;