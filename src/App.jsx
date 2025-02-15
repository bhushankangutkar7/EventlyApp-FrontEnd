import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink, redirect, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import CreateEvent from "./components/CreateEvent.jsx";
import Footer from "./components/Footer.jsx";
import {useContext} from "react";
import AuthContext from "./context/authContext.jsx";
import {useState, useEffect} from "react";
import { jwtDecode } from "jwt-decode";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decoded = jwtDecode(token, {complete: true});
      const expirationTime = decoded?.exp;
      const currentTime = Math.floor(Date.now()/1000);
        
      if(expirationTime && currentTime>=expirationTime){
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
      }
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    }, 300*1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <AuthContext.Provider
      value = {{isLoggedIn, setIsLoggedIn}}
      >
        <Router>
          <Navbar />
          <section className="d-flex justify-content-center align-items-center  vw-100 sectionContainer">
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
              />
              <Route path="/create-event" element={isLoggedIn ? <CreateEvent /> : <Navigate to="/login" />} 
              />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>

              <Route path="/contact-us" element={<ContactUs />}></Route>
            </Routes>
          </section>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
