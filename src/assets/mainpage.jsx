import React from 'react'
import  UserDetails  from './Store'; 
import "./mainpage.css"
export default function Mainpage() {
  const {user}=UserDetails();
  return (
    <div>
        <h1 className='name' >Welcome {user}</h1>
    </div>
  )
}
