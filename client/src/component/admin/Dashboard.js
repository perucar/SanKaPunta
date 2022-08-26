import { Button, Container, Nav, Row, Table } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const history = useNavigate();


  return (
    <>
    <Row>
      <h1>Dashboard</h1>
    </Row>

    <Row>
      <Nav variant="pills" defaultActiveKey="regions">
        <Nav.Item>
          <Nav.Link eventKey="regions" onClick={() => {history("regions")}}>Regions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="provinces"  onClick={() => {history("provinces")}}>Provinces</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="province-info"  onClick={() => {history("province-info")}}>Province Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="categories"  onClick={() => {history("categories")}}>Categories</Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
     
    <Row>
      <Button variant="primary">Add</Button>
    </Row>

    <Outlet />
    




    
     
    </>
  );
}

export default Dashboard;