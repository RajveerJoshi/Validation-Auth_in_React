import { Link, NavLink } from "react-router-dom"
import './header.css'

const HeaderUI = () => {


    return (
    <>

{/* <Route path='/about' element={< About/>} /> */}
          {/* <Route path='/contact' element={< Contact/>} />
          <Route path='/product' element={< Product/>} />
          <Route path='/' element={< Services/>} /> */}

<div className="header" style={{display:"flex" }}>
    <NavLink to={"/"}> <div className="m-3 p-2" >Home</div> </NavLink>
   <NavLink to={"/about"}> <div className="m-3 p-2 ">About</div> </NavLink>
   <NavLink to={"/Contact"}>  <div className="m-3 p-2">Contact</div></NavLink>
   <NavLink to={"/services"}> <div className="m-3 p-2 " >Services </div></NavLink>
   <NavLink to={"/product"}> <div className="m-3 p-2  ">Product</div></NavLink>
   <NavLink to={"/validation"}> <div className="m-3 p-2">SignUp</div></NavLink>  
   <NavLink to={"/login"}> <div className="m-3 p-2">Login</div></NavLink>  
    </div>

    </>
  )
}

export default HeaderUI