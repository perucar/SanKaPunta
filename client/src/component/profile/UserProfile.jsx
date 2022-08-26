import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "./../../css/profile.css";
import Nav from "react-bootstrap/Nav";

const UserProfile = () => {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </>
  );
};

export default UserProfile;
