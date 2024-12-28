import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VerifyOtp from './VerifyOtp'

function ForgotPassword() {
    const [email,setEmail]=useState()
    const [otpScrn,setotpScrn]=useState(false)
    const [otpKey,setOtpKey]=useState(false)
    const [loader,setLoader]=useState(false)
    const navigate=useNavigate()

    const handleSubmit=async()=>{
       const data={
            email:email
        }
        setLoader(true)
        try {
            const res= await axios.post('http://localhost:4000/api/forgotPassword',data)
            setEmail(res?.data?.data.email)
            setOtpKey(res?.data.data.key_forgotPassVerify)
            setLoader(false)
setotpScrn(true)
        } catch (error) {
            setLoader(false)
         alert(error.response.data.message)   
        }

    }
  return (
    <>
{!otpScrn?

    <div className='' style={{width:"300px", display:"flex", justifyContent:"center",border:"1px solid black",margin:"50px auto",height:"auto"}}>
    <div style={{margin:"auto"}}>
    <h5 style={{margin:"auto" }} className='text-center my-3'> Forgot Password Page</h5>
    {loader ? <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>:<>
<input placeholder='enter email' type='email' required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button className='btn btn-secondary my-3 mx-5' type='Submit' onClick={handleSubmit}>Submit</button>
    </>}
    </div>
    </div>
:
    <VerifyOtp otpKey={otpKey} email={email}/>
    
}
    </>
    )

    
}









export default ForgotPassword