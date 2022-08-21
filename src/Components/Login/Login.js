import React, { useState , useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import { useHistory } from 'react-router-dom';


import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('') 

  const handleLogin = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      alert("successfully login");
      history.push('/')
    }).catch((error)=>{
      alert(error.message);
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
