import '../../css/landingPage.css';

function Navbar() {
    return ( 
        <>
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
        </>
     );
}

export default Navbar;