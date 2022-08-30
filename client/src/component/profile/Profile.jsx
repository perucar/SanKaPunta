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
  MDBInput,
} from "mdb-react-ui-kit";
import "./../../css/profile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import MariaClara from "./../../images/mariaclara.png";
import TaalVolcano from "./../../images/taalvolcano.png";
import PuertoPrincesa from "./../../images/puertoprincesa.jpg";
import KawasanFalls from "./../../images/kawasanfalls.png";
import Corregidor from "./../../images/corregidor.jpg";
import CebuTemple from "./../../images/cebutaoisttemple.jpg";
import ChocolateHills from "./../../images/chocolatehills.jpg";
import Logo from "./../../images/logo.png";
import ManulifeLogo from "./../../images/manulife.png";

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
      <body>
      
        <div style={{ backgroundColor: "#eeeeee" }}>
          <section class="vh-100 xl-3">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="container py-5 h-100">
                    <div class="card" style={{ width: "18rem" }}>
                      <MDBBtn
                        onClick={toggleShow}
                        style={{
                          width: "9rem",
                          alignSelf: "flex-end",
                          backgroundColor: "#136912",
                          marginTop: "1rem",
                          marginRight: "1rem",
                        }}
                      >
                        Edit Profile
                      </MDBBtn>
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
                              <div class="row">
                                <div class="col-4">Name:</div>
                                <div class="col-8">
                                  <MDBInput
                                    placeholder="Display Name"
                                    id="form1"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div>
                                <MDBIcon icon="grip-lines" />
                              </div>
                              <div class="row">
                                <div class="col-4">Bio:</div>
                                <div class="col-8">
                                  <MDBInput
                                    placeholder="Description"
                                    id="form2"
                                    type="text"
                                  />
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

                      <div class="card-body">
                        <div class="container">
                          <img
                            src={MariaClara}
                            width="auto"
                            height="220px"
                            className="text-center"
                            alt="Maria Clara"
                          />
                        </div>
                        <h5 class="Montserrat card-title text-center">
                          Maria Clara
                        </h5>
                        <p class="card-text text-center">
                          Student | Manila | City Girl
                        </p>
                        <div class="container">
                          <div class="row">
                            <div class="col-sm">
                              <p class="text-center">
                                <MDBIcon icon="instagram" />
                              </p>
                            </div>
                            <div class="col-sm">
                              <p class="text-center">
                                <MDBIcon icon="twitter" />
                              </p>
                            </div>
                            <div class="col-sm">
                              <p class="text-center">
                                <MDBIcon icon="linkedin" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8 mt-5">
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
                  <div
                    class="container scroll"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <MDBTabsContent style={{ backgroundColor: "#FFFFFF" }}>
                      <MDBTabsPane show={basicActive === "tab1"}>
                        <div class="row">
                          <div class="col sm-4 mb-2">
                            <Button
                              className="pull-right"
                              variant="primary"
                              style={{
                                backgroundColor: "#136912",
                                width: "9rem",
                              }}
                            >
                              Create New
                            </Button>
                          </div>
                        </div>
                        <Card>
                          <Card.Header>
                            <MDBIcon className="pull-right" icon="heart" />
                          </Card.Header>
                          <div class="row">
                            <div class="col-5">
                              <div class="container">
                                <img
                                  src={TaalVolcano}
                                  width="auto"
                                  height="180px"
                                  className="text-center mt-5"
                                  alt="Taal Volcano"
                                />
                              </div>
                            </div>
                            <div class="col-7">
                              <Card.Body>
                                <Card.Title>Taal Volcano</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Tagaytay, Batangas
                                </Card.Subtitle>
                                <Card.Text>
                                  Taal Volcano is a must-see Attraction in the
                                  Philippines. A trip to Manila is not complete
                                  without a visit to see Taal Volcano. Located
                                  about 100 km from Manila, it takes
                                  approximately 2 hours drive by car each way,
                                  depending upon the traffic conditions of
                                  course.
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
                          <div class="row">
                            <div class="col-5">
                              <div class="container">
                                <img
                                  src={PuertoPrincesa}
                                  width="auto"
                                  height="180px"
                                  className="text-center mt-5"
                                  alt="Puerto Princesa"
                                />
                              </div>
                            </div>
                            <div class="col-7">
                              <Card.Body>
                                <Card.Title>Puerto Princesa River</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Puerto Princesa, Palawan
                                </Card.Subtitle>
                                <Card.Text>
                                  This place deserves to be on the list of the
                                  Wonders of the World. How wonderful it is that
                                  nature could carve and sculpt such a beauty.
                                  The entrance is small compared to what the
                                  inside could show you. River is 8Km long but,
                                  the tourist are only allowed to enter up to
                                  1.5km only to preserve the cave.
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
                        <Card>
                          <Card.Header>
                            <MDBIcon className="pull-right" icon="heart" />
                          </Card.Header>
                          <div class="row">
                            <div class="col-5">
                              <div class="container">
                                <img
                                  src={KawasanFalls}
                                  width="auto"
                                  height="165px"
                                  className="text-center mt-5"
                                  alt="Kawasan Falls"
                                />
                              </div>
                            </div>
                            <div class="col-7">
                              <Card.Body>
                                <Card.Title>Kawasan Falls</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Badian, Cebu
                                </Card.Subtitle>
                                <Card.Text>
                                  Kawasan Falls is honestly one of the most
                                  beautiful waterfalls we have ever seen. The
                                  reason for that is mainly the incredibly
                                  turquoise blue water. Even if today the
                                  Kawasan Falls is very famous and can get quite
                                  busy we highly recommend to visit them.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">
                                  May 16, 2022
                                </Card.Subtitle>
                              </Card.Body>
                            </div>
                          </div>
                        </Card>
                        <div>
                          <MDBIcon icon="grip-lines" />
                        </div>
                        <div class="container">
                          <div class="row">
                            <div class="col-sm"></div>
                            <div class="col-sm">
                              <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item disabled>{4}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                              </Pagination>
                            </div>
                            <div class="col-sm"></div>
                          </div>
                        </div>
                      </MDBTabsPane>

                      <MDBTabsPane show={basicActive === "tab2"}>
                        <Card>
                          <Card.Header>
                            <Button
                              className="pull-right"
                              variant="primary"
                              style={{
                                backgroundColor: "#FF3D3D",
                                width: "4rem",
                              }}
                            >
                              <div class="container">
                                <MDBIcon
                                  className="pull-right text-center"
                                  icon="trash"
                                />
                              </div>
                            </Button>
                          </Card.Header>
                          <div class="row">
                            <div class="col-5">
                              <div class="container">
                                <img
                                  src={Corregidor}
                                  width="auto"
                                  height="180px"
                                  className="text-center mt-5"
                                  alt="Corregidor"
                                />
                              </div>
                            </div>
                            <div class="col-7">
                              <Card.Body>
                                <Card.Title>Corregidor Island</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Manila Bay
                                </Card.Subtitle>
                                <Card.Text>
                                  Corregidor is an island located at the
                                  entrance of Manila Bay. Great tour! Every
                                  Filipino should go there, if given a chance,
                                  to appreciate the history of our country.
                                  Beautiful island with so much historical
                                  significance!
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
                              style={{
                                backgroundColor: "#FF3D3D",
                                width: "4rem",
                              }}
                            >
                              <div class="container">
                                <MDBIcon
                                  className="pull-right text-center"
                                  icon="trash"
                                />
                              </div>
                            </Button>
                          </Card.Header>
                          <div class="row">
                            <div class="col-5">
                              <div class="container">
                                <img
                                  src={CebuTemple}
                                  width="auto"
                                  height="160px"
                                  className="text-center mt-5"
                                  alt="Cebu Taoist Temple"
                                />
                              </div>
                            </div>
                            <div class="col-7">
                              <Card.Body>
                                <Card.Title>Cebu Taoist Temple</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Cebu City, Cebu
                                </Card.Subtitle>
                                <Card.Text>
                                  It’s one of the worth checking tourist
                                  attractions in Cebu city. You can get there on
                                  walk or taking a cab from the city. The temple
                                  is located on a hill thereby giving wider
                                  panoramic view of Cebu city. Inside it’s quiet
                                  and has numerous Taoism altars to pray and
                                  seek blessings.
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
                        <Card>
                          <Card.Header>
                            <Button
                              className="pull-right"
                              variant="primary"
                              style={{
                                backgroundColor: "#FF3D3D",
                                width: "4rem",
                              }}
                            >
                              <div class="container">
                                <MDBIcon
                                  className="pull-right text-center"
                                  icon="trash"
                                />
                              </div>
                            </Button>
                          </Card.Header>
                          <div class="row">
                            <div class="col-5">
                              <div class="container">
                                <img
                                  src={ChocolateHills}
                                  width="auto"
                                  height="160px"
                                  className="text-center mt-5"
                                  alt="Chocolate Hills"
                                />
                              </div>
                            </div>
                            <div class="col-7">
                              <Card.Body>
                                <Card.Title>Chocolate Hills</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Bohol
                                </Card.Subtitle>
                                <Card.Text>
                                It's magical, calm, stunning place.
Need to climb stairs to experience stunning view from top. Around 230 steps, there is parking and toilets and some space. Police assistance also available there and ATV rentals also available to experience multiple hills and to roam around in the forest. 
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">
                                  May 19, 2022
                                </Card.Subtitle>
                              </Card.Body>
                            </div>
                          </div>
                        </Card>
                        <div>
                          <MDBIcon icon="grip-lines" />
                        </div>
                        <div class="container">
                          <div class="row">
                            <div class="col-sm"></div>
                            <div class="col-sm">
                              <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item disabled>{4}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                              </Pagination>
                            </div>
                            <div class="col-sm"></div>
                          </div>
                        </div>
                      </MDBTabsPane>
                    </MDBTabsContent>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
      <footer style={{ backgroundColor: "#282B3E" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <div class="container">
                <div class="row">
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    <img
                      src={Logo}
                      width="auto"
                      height="200px"
                      alt="SKP Logo"
                    />
                  </div>
                  <div class="col-sm"></div>
                </div>
              </div>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                src={ManulifeLogo}
                width="auto"
                height="50px"
                alt="Manulife Logo"
              />
            </div>
            <div class="col-sm text-center text-white">
              © All Rights Reserved
            </div>
            <div class="col-sm text-end text-white">
              <p>
                Manulife IT Delivery Center Asia Manulife University Cohort 17
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Profile;
