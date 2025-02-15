import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [visibility, setVisibilty] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  const togglePassword = () => {
    setVisibilty(!visibility);
  };

  // Regex for password validation (at least 8 characters, one uppercase, one lowercase, one number, one special character)
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
      setPasswordMessage("Password is strong.");
    } else {
      setPasswordValid(false);
      setPasswordMessage(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const keepLoggedIn = form["exampleCheck1"].checked;

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Keep me logged in:", keepLoggedIn);
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
                  id="email"
                  aria-describedby="emailHelp"
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
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value); // validate password on change
                  }}
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

              <div
                id="passwordHelp"
                className="form-text ms-3 fst-italic text-danger"
              >
                {passwordMessage}
              </div>
            </div>

            <div className="mb-3 ms-1 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Keep me Logged In
              </label>
            </div>

            <div className="d-flex flex-row justify-content-center m-1">
              <button
                type="submit"
                className="btn btn-warning d-inline-block align-self-center mb-2 logInBtn"
                disabled={!passwordValid} // Disable button if password is invalid
              >
                Log In
              </button>
            </div>
            <NavLink to="/sign-up">
              <p className="mb-3 ms-1">Don't have an Account?</p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
