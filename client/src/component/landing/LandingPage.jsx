import React from 'react'
import './../../css/landingPage.css';

const LandingPage = () => {
  return (
    <>
    <header>
    <nav className="navbar navbar-light" style={{ backgroundColor: '#136912'}}>
        <div className="continer-fluid">
          <a className="navbar-brand" href="#">
              <img src="resources/logo/ic-logo.png" alt="" width="30" height="24" />
          </a>
          <form className="d-flex">
          <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search" style={{backgroundColor: '#d9d9d9' }} />
                          <div className="input-group-append">
                              <button className="btn btn-secondary" type="button" style={{ backgroundColor: '#000' }}>
                                  <i className="fa fa-search"></i>
                              </button>
                          </div>
                </div>
          </form>
          <form className="d-flex">
              <a href="#" className="link-light">Login / Sign Up</a>
          </form>
        </div>

    </nav>
    </header>
    </>
  )
}

export default LandingPage