import React, {useEffect, useState} from 'react'
import axios from 'axios';

const SignUp = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("")
  const [information, setInformation] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [data, setData] = useState({
    name,
    lastname,
    information,
    username,
    email,
    password
  });

  useEffect(() => {
    setData({
      name,
      lastname,
      information,
      username,
      email,
      password,
      date_created: 'February 17, 2009',
      user_type: 'user',
      verified: 1
    })
  }, [name, lastname, information, username, email, password])
  

    const signIn = () => {

      console.log(JSON.stringify(data))
      
      axios.post('http://localhost:5000/users', data)
      .then(function (response) {
        if(response.data.status == '200') {
          alert("User register successfully");
        } else {
          alert("User register Failed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    }
  
  return (
    <>
    <div className='container' style={{width: '30vw'}}>

   
          <div class="mb-3">
              <label class="form-label" for="name">Name</label>
              <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value) }id="name" placeholder="Name" />
          </div>

          <div class="mb-3">
              <label class="form-label" for="lastname">Lastname</label>
              <input type="text" class="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" placeholder="Lastname" />
          </div>

          <div class="mb-3">
              <label class="form-label" for="info">Information</label>
              <input type="text" class="form-control" value={information} onChange={(e) => setInformation(e.target.value)} id="info" placeholder="Information" />
          </div>

          <div class="mb-3">
              <label class="form-label" for="username">Username</label>
              <input type="text" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="username" />
          </div>

          <div class="mb-3">
              <label class="form-label" for="inputEmail">Email</label>
              <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="inputEmail" placeholder="Email" />
          </div>
          <div class="mb-3">
              <label class="form-label" for="inputPassword">Password</label>
              <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="inputPassword" placeholder="Password" />
          </div>
          <div class="mb-3">

          </div>
          <button class="btn btn-primary" onClick={signIn}>Sign in</button>

    </div>
    </>
  )
}

export default SignUp