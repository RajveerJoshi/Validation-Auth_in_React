import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate("/login")
    }
    const handleSignUP=()=>{
        navigate("/signUp")

    }
  return (
    <>
    <div className='' style={{width:"300px", display:"flex", justifyContent:"center",border:"1px solid black",margin:"50px auto",height:"100px"}}>
    <div>
    <h5> Landing Page</h5>
    <button className='btn btn-success mt-2 m-x' onClick={handleLogin}>Login</button>
    <button className='btn btn-secondary mt-2 mx-5' onClick={handleSignUP}>SignUp</button>
    </div>
    </div>
    </>
  )
}

export default LandingPage