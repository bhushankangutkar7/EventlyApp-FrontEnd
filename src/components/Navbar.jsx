import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

const Navbar = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const logOutUser = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            EventlyApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="">
                  Home
                </Link>
              </li>
              {isLoggedIn? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="create-event">
                      Create Event
                    </Link>
                  </li>
                </>
                ): (<></>)}


              
              {isLoggedIn? (<></>): (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="signup">
                      Register
                    </Link>
                  </li>
                </>)}
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="contact-us">
                  Contact us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              
              {isLoggedIn? (
                <>
                  <li 
                  className="nav-item"
                  onClick={logOutUser}
                  >
                      <Link className="nav-link d-flex justify-content-center align-items-center" to="login">
                        Logout
                        <span 
                      className="material-symbols-outlined"
                      style={{color: "grey"}}
                      >
                        logout
                      </span>
                      </Link>
                  </li>
                </>): (
                <></>)}
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
