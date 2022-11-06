import axios from "axios";
import React from "react";
import { useState} from "react";



const Signuppage = ()=>{
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")

    const submitHandler = async (e)=>{
        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        const confirmpassword = formdata.get("confirmpassword")
        await axios.post("http://localhost:8000/signup",{
            email:email,
            password:password,
            confirmpassword:confirmpassword
        }.then(
            res => res.json,
           res=>console.log(res),
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
      <input type="text" className="email" placeholder="confirmpassword" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>

      <input type="submit"/>
      </form>
        </>
    )
}

export default Signuppage