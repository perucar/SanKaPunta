import { Button, Container, Nav, Row, Table } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const history = useNavigate();


  return (
    <>
    <Container>
    <Row>
      <h1>Dashboard</h1>
    </Row>

    <Row className="mb-4">
      <Nav style={{paddingLeft: '1em', backgroundColor: 'lightseagreen', paddingTop: '1em', paddingBottom: '1em'}} variant="pills" defaultActiveKey="regions">
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