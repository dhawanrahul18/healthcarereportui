import React from "react";
import "./loginform.css"
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [popupStyle, showPopup] = useState("hide")
    const popup =() =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

//    const navigateDashboard =() =>{
//        navigate("/Dashboard")
//    }
    const inputRef = useRef(null);
   const [username, setUsername] = useState();
 const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
 localStorage.setItem("authenticated", false)
   const [password, setPassword] = useState();
const navigate = useNavigate();
const [error, setError] = useState('');
const ValidateUser= async (e) => {
e.preventDefault();
   const config = {
       headers: {
       'Content-Type': 'application/json',
       'accept': '*/*'
       }
   };
   const credentials =  { 'username': username, 'password': password};


      let response =  await axios.post('http://localhost:8080/authenticate',credentials,config).then(response => {
            localStorage.setItem("authenticated", true);
           console.log(response.data);
             navigate('/Dashboard');
       }, (error) => {
          console.log(error);
          popup();
        });

}
    return (

        <div className="cover">

        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>

        <div className="login-btn" onClick={ValidateUser}>Login</div>

        <div className={popupStyle}>
            <h3> Login Failed </h3>
            <p> Username or password incorrect</p>
        </div>


        </div>
    )


}



export default Login