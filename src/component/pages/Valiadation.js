import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import HeaderUI from "./Header";
import { Link, useNavigate } from "react-router-dom";

const Validation = () => {
  const [visible, setVisible] = useState(false);
  const [cnfvisible, cnfsetVisible] = useState(false);
const [formData,setFormData]=useState({
    name:"",
    password:"",
    cnfPassword:"",
    email:""
})


  const navigate = useNavigate();

  const HandleVisible = () => {
    setVisible(true);
    console.log("Handle-Visible call");
  };

  const HandleInVisible = () => {
    setVisible(false);
    console.log("HandleIN--Visible call");
  };



const handleFormData =(data)=>{
console.log("data....",data)
}

const handleOnChange =(e)=>{
    const {name,value}=e.target

    setFormData({...formData,[name]:value})

}


  return (
    <>
      <HeaderUI />
      <h6>Validation Form</h6>
      <div
        style={{
          height: "400px",
          width: "400px",
          border: "1px solid red",
          margin: "auto",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <form onSubmit={handleFormData}>
        <input
          type="text"
          onChange={handleOnChange}
          value={formData.name}
          placeholder="enter Full Name"
          required
name="name"
          maxLength={15}
        />
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="enter email address"
          onChange={handleOnChange}
          value={formData.email}
          minLength={7}
          maxLength={15}
          required
          name="email"
        />
        <br></br>
        <br></br>
        <input
          type={visible ? "text" : "password"}
          onChange={handleOnChange}
          value={formData.password}
          placeholder="enter password"
        name="password"
        
        />

        {visible ? (
          <span onClick={HandleInVisible}>
            {" "}
            <FaRegEyeSlash />{" "}
          </span>
        ) : (
          <span className="visible" onClick={HandleVisible}>
            {" "}
            <FaRegEye />{" "}
          </span>
        )}

        <br></br>
        <br></br>
        <input  name="cnfPassword" required type= {visible? "text":"password"}  placeholder="enter confirm  password" value={formData.cnfPassword} onChange={handleOnChange}/>  {visible?<span onClick={HandleInVisible}> <FaRegEyeSlash /> </span> :<span  className="visible" onClick={HandleVisible}>  <FaRegEye /> </span>  } <br></br> <br></br>

        <button type="submit"> Submit</button>
        </form>
      </div>
    </>
  );
};

export default Validation;
