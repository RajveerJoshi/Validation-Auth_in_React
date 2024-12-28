import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoder] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    try {
      setLoder(true);
      const res = await axios.post("http://localhost:4000/api/signIn", data);
      console.log("signIn res", res.data);
      setLoder(false);
      navigate("/");
    } catch (e) {
      setLoder(false);
      alert(e?.response?.data?.message);
    }
  };
  return (
    <div
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
          Login Page
        </h5>
        {loader ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <input
              placeholder="enter email"
              type="email"
              required
              className="form-control"
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

            <a
              className="btn-link  my-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/forgotPassword")}
            >
              forgot password
            </a>
          </>
        )}{" "}
      </div>
    </div>
  );
}

export default Login;
