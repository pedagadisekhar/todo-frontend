import axios from "axios";
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";


const Signinpage = ()=>{
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    const submitHandler = async(e)=>{
        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        
        await axios.post("http://localhost:8000/signin",{
            email:email,
            password:password,
            
        }.then(
            res => res.json,
            
            alert("saved succesfully")

        ).then(
            data => console.log(data)
        ).catch(err=>console.log(err)))
    }

    return(
       <>
       <form onSubmit={submitHandler}>
      <input type="text" className="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" className="email" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      
      <input type="submit"/>
      </form>
    <Link to="/Signuppage"><button>Signup</button></Link>
        </>
    )
}

export default Signinpage