import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerifyOtp from "./VerifyOtp";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [optToggle,setoptToggle]=useState(false)
  const [loader,setLoader]=useState(false)
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
      name: name,
    };
    setLoader(true)
    try {
      const res = await axios.post("http://localhost:4000/api/signUp", data);
      setLoader(false)
      setoptToggle(true)
      console.log(res)

    } catch (e) {
      if (e.response.status === 403) {
        alert(e?.response?.data?.message)
        setLoader(false)
        console.log(e);
      } else {
        setLoader(false)
        console.log(e)
        alert(e?.response?.data?.message);
      }
    }
  };
  return (
    <>
{!optToggle?    <div
      className=""
      style={{
        width: "300px",
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        margin: "50px auto",
        height: "auto",
      }}
    >
      <div style={{ margin: "auto" }}>
        <h5 style={{ margin: "auto" }} className="text-center my-3">
          {" "}
          SignUp Page
        </h5>

        {loader ? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>:
      <>
        <input
          placeholder="enter name"
          required
          className="form-control mt-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="enter email"
          type="email"
          required
          className="form-control mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="enter password"
          required
          className="form-control mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-secondary my-3 mx-5"
          type="Submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
    
    </>  }
      </div>
      </div>
:
      <VerifyOtp email={email} name={name} password={password}/>}

      </>
  );
}
export default SignUp;
