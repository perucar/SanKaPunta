import React, {useState} from 'react'
import logo from './../../images/ic-logov2.png';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userToken')));

    const logout = () => {
      localStorage.removeItem("userToken");
      window.location.reload();
    };
    
    const getCurrentUser = () => {
      return JSON.parse(localStorage.getItem("userToken"));
    };
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-success navbar-dark p-0" >
      <div className="container-fluid p-0 " >
      {/* <a className="navbar-brand" href="#">
        <img src={logo} style={{ width: '100px', height: '100px', margin: '0px', padding: '0' }}/>
      </a> */}

      <div className="collapse navbar-collapse" id="navbarText">
      <span>
        <img src={logo} alt="" width="120" height="100" className="d-inline-block align-text-top p-0" style={{ padding: '0px !important'}}/>
      </span>
        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>

        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-light me-4" type="submit">Search</button>

          { user ? 
            <button type="button" className="btn btn-danger btn-sm m-2" onClick={logout}>
              Logout
            </button>
          :
            <button type="button" className="btn btn-primary btn-sm m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Login
            </button>
          }
        </form>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar