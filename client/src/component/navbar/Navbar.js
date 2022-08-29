import React, {useState, useEffect} from 'react'
import logo from './../../images/ic-logov2.png';
import './navbar.css';
import { Outlet, Link } from "react-router-dom";
import SuggestionInputSearch from 'suggestion-react-input-search'; 

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Navbar = (props) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userToken')));
    const [search, setSearch] = useState("")

    const [city, setCity] = useState("")


    const onSearch = () => {
      props.changeCat(city.label)
      console.log("city", city.label);
    }

    const logout = () => {
      localStorage.removeItem("userToken");
      window.location.reload();
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

          { user && 
          <li className="nav-item">
            <a className="nav-link" href="#">My Account</a>
          </li>
          }
        </ul>
      </div>
 
        <div className="d-flex">
              <Autocomplete
                style={{ backgroundColor: '#fff' }}
                disablePortal
                id="combo-box-demo"
                options={
                  props.mapData?.getProvinces?.map(function(row) {
                    return { label : row.name }
                  })
                }
                sx={{ width: 300 }}
                renderInput={(params) => {
                  return <TextField {...params} label="City" /> 
                }}

                onChange={(event, newValue) => setCity(newValue) }
              />
              {/* <input type="text" className="form-control me-2"  value={search} onChange={handleSearch} /> */}
              <button className="btn btn-light me-4" onClick={() => onSearch(search)}> Search </button>
          
            <div className="dropdown">
              {props.mapData?.getProvinces
                .filter((item) => {
                  const searchTerm = search.toLowerCase();
                  const fullName = item.name.toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.name)}
                    className="dropdown-row"
                    key={item.name}
                  >
                    {item.name}
                  </div>
                ))}
            </div>


          { user ? 
            <button type="button" className="btn btn-danger btn-sm m-2" onClick={logout}>
              Logout
            </button>
          :
          <>     
            <button type="button" className="btn btn-primary btn-sm m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Login
            </button>
          </>
          }
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar