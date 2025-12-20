import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Loginsign from "./Components/LoginSignup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Components/UserProfile"
import UserStories from "./Components/User-Stories"

import Home from "./Pages/Home";
import About from "./Pages/About-us";
import Stories from "./Pages/Stories";
import Donate from "./Pages/donation";
import Contact from "./Pages/contact";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );

  return (
    <BrowserRouter>
      {/* ✅ Header gets auth state */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* ✅ Login / Signup Page */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Loginsign setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        {/* ✅ Protected Routes */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />

        <Route
          path="/stories"
          element={isLoggedIn ? <Stories /> : <Navigate to="/login" />}
        />
        <Route
          path="/userstories"
          element={isLoggedIn ? <UserStories /> : <Navigate to="/login" />}
        />

        <Route
          path="/donation"
          element={isLoggedIn ? <Donate /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />



        {/* ✅ Default redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
