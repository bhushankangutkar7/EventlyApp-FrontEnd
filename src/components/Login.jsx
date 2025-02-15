import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {authLogIn} from "../services/authService.jsx";
import AuthContext from "../context/authContext.jsx";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [visibility, setVisibilty] = useState("false");
  const [errMsg, setErrMsg] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    keepLoggedIn: false,
  });
  const {setIsLoggedIn} = useContext(AuthContext);
  const navigate=useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("authToken");

    if(token) {
      setIsLoggedIn(true);
      navigate("/");
    }else{
      setIsLoggedIn(false);
    }

  });

  const togglePassword = () => {
    setVisibilty(!visibility);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name !== "password") {
      setUserData({ ...userData, [name]: value });
    }
    if (name === "keepLoggedIn") {
      setUserData({ ...userData, [name]: event.target.checked });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const clearInputs = () => {
    document.getElementById("emailId").value = "";
    document.getElementById("passwordId").value = "";
    document.getElementById("keepLoggedInId").checked = false;
    setUserData({
      email: "",
      password: "",
      keepLoggedIn: false,
    });
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    authLogIn(userData)
    .then((res)=>{
      if(res.data.err == 0) {
        alert(res.data.msg);
        localStorage.setItem("authToken", res.data.token);
        clearInputs();
        navigate("/");
      } else {
        setErrMsg(res.data.msg);
          alert(res.data.msg);
          console.log(res.data.msg);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <>
      <div className="loginOuterContainer d-flex flex-column justify-content-center align-items-center vh-100">
        <div
          className="container d-flex flex-column justify-content-center rounded-4 loginContainer"
          style={{
            minWidth: "400px",
            maxWidth: "550px",
            minHeight: "400px",
            maxHeight: "550px",
          }}
        >
          <h4 className="align-self-center mt-4">Log In</h4>
          <form className="m-3" method="POST" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label ms-2">
                Email address
              </label>

              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="email"
                  name="email"
                  className="border p-1 rounded-start input"
                  id="emailId"
                  aria-describedby="emailHelp"
                  onChange={handleInputChange}
                />
                <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                  mail
                </span>
              </div>

              <div id="emailtext" className="form-text ms-3 fst-italic">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label ms-2">
                Password
              </label>

              <div className="d-flex justify-content-center align-items-center">
                <input
                  type={visibility ? "password" : "text"}
                  name="password"
                  className="border p-1 rounded-start input"
                  id="passwordId"
                  onChange={handleInputChange}
                />
                {visibility ? (
                  <span
                    className="material-symbols-outlined z-index-20 p-1 border rounded-end icon eIcon"
                    onClick={togglePassword}
                  >
                    visibility_off
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined z-index-20 p-1 border rounded-end icon eIcon"
                    onClick={togglePassword}
                  >
                    visibility
                  </span>
                )}
              </div>
            </div>

            <div className="mb-3 ms-1 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="keepLoggedIn"
                id="keepLoggedInId"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="keepLoggedIn">
                Keep me Logged In
              </label>
            </div>

            <div className="d-flex flex-row justify-content-center m-1">
              <button
                type="submit"
                className="btn btn-warning d-inline-block align-self-center mb-2 logInBtn"
              >
                Log In
              </button>
            </div>
            <NavLink to="/signup">
              <p className="mb-3 ms-1">Don't have an Account?</p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
