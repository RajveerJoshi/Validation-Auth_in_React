import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

const[username, setUsername] = useState();
const [password,setPassword] = useState();


const navigate=useNavigate()

    const handleSubmit =async()=>{
const data={
    username:username,
    password:password
}

try{
    // const res= await axios("url",data)
    const res={token:"dscszfsdffdds",username:"Ujjwal"}
    localStorage.setItem("userToken",res.token)
    navigate("/")
}catch(e){

}

    }
  return (
<>
<div style={{width:"400px",height:"200px",border:"1px solid black",margin:"auto"}}>
<h6>Login User</h6>
<div style={{margin:"auto",textAlign:"center"}}>

<input type='text' onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='enter UserName' /><br></br><br></br>
<input type='text' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='enter Password' /><br></br><br></br>

<button onClick={handleSubmit}>Submit</button>
</div>
</div>
</>
  )
}

export default UserLogin