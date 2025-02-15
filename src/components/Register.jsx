import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authSignUp } from "../services/AuthService.jsx";

const SignUp = () => {
  const [visibility, setVisibilty] = useState("false");
  const [errMsg, setErrMsg] = useState("");
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    contactNumber: "",
    password: "",
    keepLoggedIn: false,
  });
  const [passwordValid, setPasswordValid] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const navigate = useNavigate();


  const togglePassword = () => {
    setVisibilty(!visibility);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
      setPasswordMessage("Password is Strong");
    } else {
      setPasswordValid(false);
      setPasswordMessage(
        <>
          Password must be at least 8 characters long.
          <br />
          Contain at least one uppercase letter.
          <br />
          Contain at least one lowercase letter.
          <br />
          Contain at least one number.
          <br />
          Contain at least one special character (e.g., @$!%*?&).
          <br />
        </>
      );
    }
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
      validatePassword(value);
    }
  };

  const clearInputs = () => {
    document.getElementById("fNameId").value = "";
    document.getElementById("lNameId").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("contactNumberId").value = "";
    document.getElementById("passwordId").value = "";
    document.getElementById("keepLoggedInId").checked = false;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    authSignUp(userData)
      .then((res) => {
        if (res.data.err == 0) {
          alert(res.data.msg);
          setUserData({
            fName: "",
            lName: "",
            email: "",
            contactNumber: "",
            password: "",
            keepLoggedIn: false,
          });
          clearInputs();
          navigate("/");
        } else {
          setErrMsg(res.data.msg);
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" loginOuterContainer d-flex flex-column justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div
          className="container d-flex flex-column justify-content-center rounded-4 loginContainer"
          style={{
            minWidth: "400px",
            maxWidth: "550px",
          }}
        >
          <h4 className="align-self-center mt-4">Sign Up</h4>
          <form className="m-3" method="POST" onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label htmlFor="fName" className="form-label ms-2">
                First Name
              </label>

              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="text"
                  name="fName"
                  className="border p-1 rounded-start input"
                  id="fNameId"
                  aria-describedby="fNameHelp"
                  onChange={handleInputChange}
                />
                <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                  id_card
                </span>
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="lName" className="form-label ms-2">
                Last Name
              </label>

              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="text"
                  name="lName"
                  className="border p-1 rounded-start input"
                  id="lNameId"
                  aria-describedby="lNameHelp"
                  onChange={handleInputChange}
                />
                <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                  id_card
                </span>
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label ms-2">
                Email Address
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

            <div className="mb-2">
              <label htmlFor="contactNumber" className="form-label ms-2">
                Contact No.
              </label>

              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="tel"
                  name="contactNumber"
                  className="border p-1 rounded-start input"
                  id="contactNumberId"
                  aria-describedby="telHelp"
                  onChange={handleInputChange}
                />
                <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                  call
                </span>
              </div>

              <div id="telText" className="form-text ms-3 fst-italic">
                We'll never share your Contact No. with anyone else.
              </div>
            </div>

            <div className="mb-2">
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
                <span
                  className="material-symbols-outlined z-index-20 p-1 border rounded-end icon eIcon"
                  onClick={togglePassword}
                >
                  {visibility ? "visibility_off" : "visibility"}
                </span>
              </div>

              <div
                id="passwordHelp"
                className="form-text ms-3 fst-italic text-danger"
              >
                <p>{passwordMessage}</p>
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
                className={`btn btn-warning d-inline-block align-self-center mb-2 logInBtn ${
                  passwordValid ? "" : "disabled"
                }`}
              >
                Sign Up
              </button>
            </div>

            <NavLink to="/login">
              <p className="mb-3 ms-1">Already an User? Log In</p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
