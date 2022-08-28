import { Container, Nav, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Dashboard() {
  const history = useNavigate();


  return (
    <>
    <Navbar />
    <Container>
    <Row>
      <h1>Dashboard</h1>
    </Row>

    <Row className="mb-4">
      <Nav style={{paddingLeft: '1em',  paddingTop: '1em', paddingBottom: '1em'}} variant="tabs" defaultActiveKey="regions">
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
     
    

    <Outlet />  
    </Container>
    
    




    
     
    </>
  );
}

export default Dashboard;