import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({component}) => {


const isToken =localStorage.getItem("userToken")
console.log("isToken" ,isToken)

const navigate=useNavigate()
useEffect(()=>{
if(!isToken){
    navigate("/login")
}
},[])

  return (
    <>{component}</>
  )
}

export default ProtectedRoute