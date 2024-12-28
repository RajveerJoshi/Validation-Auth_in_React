import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RecetPassword({verifyemail}) {
   
    const [password,setPassword]=useState()
    const [conPassword,setConPassword]=useState()
    const [loader,setLoader]=useState()
    const navigate=useNavigate()
    const handleSubmit=async()=>{
       const data={
        email:verifyemail,
            password:password,
            confirmPassword:conPassword
        }
        setLoader(false)
        try{
            const res= await axios.post('http://localhost:4000/api/recetPassword',data)
            setLoader(false)
            navigate("/login")

        }catch(e){
            setLoader(false)
            alert(e.response.data.message)

        }

    }
  return (
    <div className='' style={{width:"300px", display:"flex", justifyContent:"center",border:"1px solid black",margin:"50px auto",height:"auto"}}>
    <div style={{margin:"auto"}}>
    <h5 style={{margin:"auto" }} className='text-center my-3'>Create New password</h5>
    {loader ? <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
:<>
<input placeholder='enter password'  required className='form-control mt-4' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<input placeholder='enter confirm password'  required className='form-control mt-4' value={conPassword} onChange={(e)=>setConPassword(e.target.value)}/>
    <button className='btn btn-secondary my-3 mx-5' type='Submit' onClick={handleSubmit}>Submit</button>
    </>}
    </div>
    </div>  )
}

export default RecetPassword