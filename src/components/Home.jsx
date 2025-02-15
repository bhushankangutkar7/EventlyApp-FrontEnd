import React from "react";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import {NavLink} from "react-router-dom";


const Home = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);


  return (
    <>
      <div className={`container contactUsContainer w-75 d-flex flex-column justify-content-center ${isLoggedIn ? "":"vh-100"}`}>
        <br />
        <div className="contact-form">
          <h1>Welcome to EventlyApp</h1>
          <h3>Explore your past Events</h3>
          <hr />
        </div>
        <div className="container gap-5 pt-4 pb-4">
          { isLoggedIn? (
            <>
              <div className="row">
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
            <div className="col-sm p-2">
              <img
                className="img-thumbnail "
                src="/images/vietnam-9295186_1920.jpg"
                alt=""
              />
            </div>
          </div>
            </>)  : (
              <>
                <div className="container contact-form">
                  <h3 className="container contact-form tex-center">Your need to login to see All Events</h3>
                  <h5 className="container contact-form tex-center"><NavLink to={"/login"}>Go to Login Page</NavLink></h5>
                </div>
              </>
              )}
          
        </div>
      </div>
    </>
  );
};

export default Home;
