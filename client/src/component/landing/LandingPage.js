import React from 'react'
import './../../css/landingPage.css';

const LandingPage = () => {
  return (
    <>
    <header>
    <nav className="navbar navbar-light" style={{ backgroundColor: '#136912'}}>
        <div className="container-fluid">
          <p className="navbar-brand">
              <img src="images/ic-logo.png" alt="" width="30" height="24" />
          </p>

          {/* Search Button */}
          <form className="d-flex">
            <div className="justify-content-center">
              <input type="text" className="form-control" placeholder="Search" style={{backgroundColor: '#d9d9d9' }} />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button" style={{ backgroundColor: '#000' }}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          <form className="d-flex">
              <a type="button" className="link-light"   data-bs-toggle="modal" data-bs-target="#exampleModal"  >
             Login / Sign Up
             </a>
          </form>

        </div>
        <form className="d-flex">
             <div className="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                 <div className="modal-content">
                  <div className="bg-success modal-header">
                  <img src="resources/logo/ic-logo.png" alt="" width="30" height="24" />
                    <h5 className="text-light bg-success modal-title" id="exampleModalLabel">Account Login / Sign Up</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                <div className="modal-body">

                   
                   <div className ="form-outline mb-4">
                     <input type="email" id="form2Example1" className ="form-control" />
                     <label className ="form-label" for="form2Example1">Email address</label>
                   </div>

                   
                   <div className ="form-outline mb-4">
                     <input type="password" id="form2Example2" className ="form-control" />
                     <label className ="form-label" for="form2Example2">Password</label>

                     <div class="modal-footer">
                     <a type="button" class="align-text-bottom" className="link-dark" data-bs-toggle="modal" data-bs-target="#registerModal">Sign up?</a>
                    </div>
                    </div>
                   

                   <div className ="row mb-4">
                     <div className ="col d-flex justify-content-center">
                       
                       <div className ="form-check">
                         <input className =" text-light bg-success form-check-input" type="checkbox" value="" id="form2Example31" checked />
                         <label className ="form-check-label" for="form2Example31"> Remember me </label>
                       </div>
                     </div>
                   </div>
                   
                   <div className ="text-center">
                   <button type="button" className ="btn btn-success btn-block mb-4">Sign in</button>
                   </div>
                   
                   <div class="modal fade" id="registerModal" tabindex="-1">
                     <div class="modal-dialog">
                     <div class="modal-content">
                       <div class="modal-header">
                         <h5 class="modal-title">Modal title</h5>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                       </div>
                       <div class="modal-body">
                         <p>Modal body text goes here.</p>
                       </div>
                       <div class="modal-footer">
                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                         <button type="button" class="btn btn-primary">Save changes</button>
                       </div>
                     </div>
                   </div>
                 </div>
                   

                   

               </div>
               </div>
             </div>
           </div>
         </form>
    </nav>
    
    </header>
    <main>
     <article>
     <h4 class="ps-4">Recommendations</h4>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card" >
                        <div class="img-wrapper">
                            <img src="resources/img-elnido.png" class="card-img-top" alt="..."></img>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">El Nido</h5>
                          <p class="card-text">Palawan Province</p>
                        </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card" >
                        <div class="img-wrapper">
                            <img src="resources/img-albay.png" class="card-img-top" alt="..."></img>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Albay</h5>
                          <p class="card-text">Bicol Region</p>
                        </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card">
                        <div class="img-wrapper">
                            <img src="resources/img-cebu.png" class="card-img-top" alt="..."></img>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Cebu</h5>
                          <p class="card-text">Central Visayas Region</p>
                        </div>
                      </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </article>
        <section class="mt-5 mb-3">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item"> 
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <h5>How To Use?</h5>
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
        </section>
        <section class="mb-5">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <h5>Frequently Asked Questions (FAQs)</h5>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
              </div>
        </section>
    </main>  

    <footer class="d-flex justify-content-center align-text-bottom">
      <p>Copyright © 2022 San Ka Punta., Ltd. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default LandingPage;