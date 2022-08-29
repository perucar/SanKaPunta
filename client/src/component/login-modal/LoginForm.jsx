import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import logo from './../../images/ic-logo.png';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const [user, setUser] = useState({})


    const handleSubmit = event => {
        event.preventDefault();
        setUser({
            username: username,
            password: password
        });

        console.log(user);

        axios.post('http://localhost:5000/users/login', user)
        .then(data => {
            // console.log(data.data);

            if(data.data.success) {
                localStorage.setItem('userToken', JSON.stringify(data.data));
                console.log('user token', JSON.parse(localStorage.getItem('userToken')));
                // navigate('/admin');
                // window.location.reload();
            } else {
                setPassword("");
                setUsername("");
                setError(data.data.message);
            }

        })
        .catch((err)=> console.log(err));
    }

  return (
       <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">


            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            { error !== ""  &&             
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Password</label>
                        <input type="password" className="form-control password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="row">
                        <input type="submit" className='btn btn-primary mt-4 float-right' value="Login" />
                    </div>
                </form>

                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
       </>
  )
}

export default LoginForm