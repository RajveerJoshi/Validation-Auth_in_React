import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RecetPassword from './RecetPassword'

function VerifyOtp({email,name,password,otpKey }) {
    const [otp,setOtp]=useState()
    const [rescetPassScrn,setRescetPassScrn]=useState(false)
    const [verifyemail,setverifyemail]=useState("")
    const [loader,setLoader]=useState(false)
    const navigate=useNavigate()

    const handleSubmit=async()=>{
       const data={
            otp:otp,
            email:email,
            name:name,
            password:password
        }
        console.log("otpKey",otpKey)  
        setLoader(true)
        try{
            const res= await axios.post('http://localhost:4000/api/verifyOtp',data)
            if(res?.data?.key){
                setverifyemail(res?.data?.email)
                console.log(res.data)
                setLoader(false)
                setRescetPassScrn(true)

            }else{
                setLoader(false)
                navigate("/login")
            }

        }
        catch(e){
            setLoader(false)
alert(e?.response?.data?.message)

        }


    }

    const handleResendOtp=async()=>{
        const data={
             otp:otp,
             email:email,
             name:name,
             password:password
         }
         console.log("handle Submit otp data",data)
         try{
             const res= await axios.post('http://localhost:4000/api/resendOtp',data)
             console.log("handle Submit otp data res",res)
             navigate("/login")
         }
         catch(e){
 console.log(e)
 console.log(e?.response?.data?.message)
         }
 
 
     }

  return (

    <>
    {!rescetPassScrn? 
    <div className='' style={{width:"300px", display:"flex", justifyContent:"center",border:"1px solid black",margin:"50px auto",height:"auto"}}>
    <div style={{margin:"auto"}}>
    <h5 style={{margin:"auto" }} className='text-center my-3'> OTP Page</h5>
    {loader ? <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>:
<>
<input placeholder='enter otp' type='text' required className='form-control' value={otp} onChange={(e)=>setOtp(e.target.value)}/>
    <button className='btn btn-primary my-3 mx-5' type='Submit' onClick={handleSubmit}>Submit</button>
    <button className='btn btn-secondary my-3 ' type='Submit' onClick={handleResendOtp}>Resend OTP</button>
    </>}
    </div>
    </div>:<RecetPassword verifyemail={verifyemail}/> }
    </> )
}














export default VerifyOtp