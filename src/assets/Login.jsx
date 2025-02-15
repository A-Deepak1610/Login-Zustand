import React from 'react'
import { useState ,useEffect} from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom"   
import  UserDetails  from './Store'; 
export default function Login() {
    const navigate = useNavigate()
    const [username,setUsername ] =useState('');
    const [password,setPassword ] =useState('');
    const [invalid,setinvalid ] =useState('');
    const {user,login}=UserDetails();
    function handlesumbit(event){
        event.preventDefault()
        // if(username=="admin"&&password=="admin"){
        login(username);
        navigate("Login-Zustand/mainpage");
        setinvalid("");
        // }
        // else{
        //     setinvalid("Invalid username or password");
        // }
    }
    // useEffect(()=>{
    //     alert("USERNAME:admin \nPASSWORD:admin")
    // })
  return (
    <div>
        <div className="main">
            <div className="logincontent">
                <h1>LOGIN</h1>
                <div className="loginform"></div>
                <form onSubmit={handlesumbit}>
                    <i className="fa-solid fa-user"></i>
                    <input className='username' type="text" placeholder="Username" required onChange={(e)=>{setUsername(e.target.value)}} /><br/>
                    <i className="fa-solid fa-lock"></i>
                    <input className='password' type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}  /><br/>
                    <p className='error'>{invalid}</p>
                    <button className='sumbitbutton' type="submit">Login</button>    
                </form>
            </div>
        </div>
    </div>
  )
}