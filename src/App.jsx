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

        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Loginsign setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/stories"
          element={isLoggedIn ? <Stories /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/userstories"
          element={isLoggedIn ? <UserStories /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/donation"
          element={isLoggedIn ? <Donate /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" replace />}
        />

        {/* SAFE fallback */}
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          }
        />

      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
