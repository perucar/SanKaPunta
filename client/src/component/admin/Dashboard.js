import { Col, Container, Nav, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Dashboard() {
  const history = useNavigate();


  return (
    <>
    <Navbar />
    <Container className="mt-5">
    <Row>
      <h1>Dashboard</h1>
    </Row>

    <Row className="mt-2" >
      <Col sm={{span: 12}} lg={{span: 2}}>
        <Nav className="flex-column-lg" style={{paddingLeft: '1em',  paddingTop: '1em', paddingBottom: '1em'}} variant="pills" defaultActiveKey="regions">
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
      </Col>

      <Col sm={12} lg={{span: 9, offset: 1}}>
        <Outlet />
      </Col>
      
    </Row>
     
    

     
    </Container>
    
    




    
     
    </>
  );
}

export default Dashboard;