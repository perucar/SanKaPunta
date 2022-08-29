import React, { useState } from "react";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdb-react-ui-kit";
import "./../../css/profile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";

const Profile = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <header>
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#136912" }}
        >
          <div className="continer-fluid">
            <form className="d-flex">
              <a href="#" className="link-light">
                Login / Sign Up
              </a>
            </form>
          </div>
        </nav>
      </header>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <section className="vh-100 xl-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="container py-5 h-100">
                  <div className="card" style={{ width: "18rem" }}>
                    <MDBBtn onClick={toggleShow} style={{
                        width: "9rem",
                        alignSelf: "flex-end",
                        backgroundColor: "#136912",
                        marginTop: "1rem",
                        marginRight: "1rem"
                      }}>Edit Profile</MDBBtn>
                    <MDBModal
                      show={basicModal}
                      setShow={setBasicModal}
                      tabIndex="-1"
                    >
                      <MDBModalDialog>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Edit Profile</MDBModalTitle>
                            <MDBBtn
                              className="btn-close"
                              color="none"
                              onClick={toggleShow}
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                          <div className="row">
                              <div className="col-4">
                                Name: 
                              </div>
                              <div className="col-8">
                              <MDBInput placeholder='Display Name' id='form1' type='text' />
                              </div>
                            </div>
                            <div>
                            <MDBIcon icon="grip-lines" />
                            </div>
                            <div className="row">
                              <div className="col-4">
                                Bio: 
                              </div>
                              <div className="col-8">
                              <MDBInput placeholder='Description' id='form2' type='text' />
                              </div>
                            </div>
                          </MDBModalBody>

                          <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleShow}>
                              Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>

                    <div className="card-body">
                      <img src="mariaclara.png"></img>
                      <h5 className="card-title text-center">Maria Clara</h5>
                      <p className="card-text text-center">Student | Manila | City Girl</p>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm">
                            <MDBIcon icon="instagram" />
                          </div>
                          <div className="col-sm">
                            <MDBIcon icon="twitter" />
                          </div>
                          <div className="col-sm">
                            <MDBIcon icon="linkedin" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 mt-5">
                <MDBTabs className="mb-3">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab1")}
                      active={basicActive === "tab1"}
                    >
                      <MDBIcon icon="pencil" />
                      Posts
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab2")}
                      active={basicActive === "tab2"}
                    >
                      <MDBIcon icon="heart" /> Favorites
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent style={{ backgroundColor: "#FFFFFF"}}>
                  <MDBTabsPane show={basicActive === "tab1"}>
                    <div className="row">
                      <div className="col sm-4 mb-2">
                        <Button
                          className="pull-right"
                          variant="primary"
                          style={{ backgroundColor: "#136912", width: "9rem" }}
                        >
                          Create New
                        </Button>
                      </div>
                    </div>
                    <Card>
                      <Card.Header>
                        <MDBIcon className="pull-right" icon="heart" />
                      </Card.Header>
                      <div className="row">
                        <div className="col-5">
                          <Card.Img variant="top" src="mariaclara.png" />
                        </div>
                        <div className="col-7">
                          <Card.Body>
                            <Card.Title>Taal Volcano</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Tagaytay, Batangas
                            </Card.Subtitle>
                            <Card.Text>
                              Taal Volcano is a must-see Attraction in the
                              Philippines. A trip to Manila is not complete
                              without a visit to see Taal Volcano. Located about
                              100 km from Manila, it takes approximately 2 hours
                              drive by car each way, depending upon the traffic
                              conditions of course.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">
                              August 20, 2022
                            </Card.Subtitle>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                    <div>
                      <MDBIcon icon="grip-lines" />
                    </div>
                    <Card>
                      <Card.Header>
                        <MDBIcon className="pull-right" icon="heart" />
                      </Card.Header>
                      <div className="row">
                        <div className="col-5">
                          <Card.Img variant="top" src="" />
                        </div>
                        <div className="col-7">
                          <Card.Body>
                            <Card.Title>Puerto Princesa River</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Puerto Princesa, Palawan
                            </Card.Subtitle>
                            <Card.Text>
                              This place deserves to be on the list of the
                              Wonders of the World. How wonderful it is that
                              nature could carve and sculpt such a beauty. The
                              entrance is small compared to what the inside
                              could show you. River is 8Km long but, the tourist
                              are only allowed to enter up to 1.5km only to
                              preserve the cave.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">
                              June 5, 2022
                            </Card.Subtitle>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                    <div>
                      <MDBIcon icon="grip-lines" />
                    </div>
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item disabled>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </MDBTabsPane>
                  <MDBTabsPane show={basicActive === "tab2"}>
                    <Card>
                      <Card.Header>
                        <Button
                          className="pull-right"
                          variant="primary"
                          style={{ backgroundColor: "#FF3D3D", width: "2rem" }}
                        >
                          <MDBIcon
                            className="pull-right text-center"
                            icon="trash"
                          />
                        </Button>
                      </Card.Header>
                      <div className="row">
                        <div className="col-5">
                          <Card.Img variant="top" src="" />
                        </div>
                        <div className="col-7">
                          <Card.Body>
                            <Card.Title>Corregidor Island</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Manila Bay
                            </Card.Subtitle>
                            <Card.Text>
                              Corregidor is an island located at the entrance of
                              Manila Bay. Great tour! Every Filipino should go
                              there, if given a chance, to appreciate the
                              history of our country. Beautiful island with so
                              much historical significance!
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">
                              June 18, 2022
                            </Card.Subtitle>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                    <div>
                      <MDBIcon icon="grip-lines" />
                    </div>
                    <Card>
                      <Card.Header>
                        <Button
                          className="pull-right"
                          variant="primary"
                          style={{ backgroundColor: "#FF3D3D", width: "2rem" }}
                        >
                          <MDBIcon
                            className="pull-right text-center"
                            icon="trash"
                          />
                        </Button>
                      </Card.Header>
                      <div className="row">
                        <div className="col-5">
                          <Card.Img variant="top" src="" />
                        </div>
                        <div className="col-7">
                          <Card.Body>
                            <Card.Title>Cebu Taoist Temple</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Cebu City, Cebu
                            </Card.Subtitle>
                            <Card.Text>
                              It’s one of the worth checking tourist attractions
                              in Cebu city. You can get there on walk or taking
                              a cab from the city. The temple is located on a
                              hill thereby giving wider panoramic view of Cebu
                              city. Inside it’s quiet and has numerous Taoism
                              altars to pray and seek blessings.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">
                              June 4, 2022
                            </Card.Subtitle>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                    <div>
                      <MDBIcon icon="grip-lines" />
                    </div>
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item disabled>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </MDBTabsPane>
                </MDBTabsContent>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
