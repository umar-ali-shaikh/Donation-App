import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

/* Components */
import Loginsign from "./Components/LoginSignup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Components/UserProfile";
import UserStories from "./Components/User-Stories";

/* Pages */
import Home from "./Pages/Home";
import About from "./Pages/About-us";
import Stories from "./Pages/Stories";
import Donate from "./Pages/donation";
import Contact from "./Pages/contact";

/* UI Effects */
import IntroMouseHover from "./Components/Appintro";
import AppLoader from "./Components/AppLoader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );

  const [loading, setLoading] = useState(true);

  /* Loader timing */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* 🌍 Global Loader */}
      {loading && <AppLoader />}

      {/* 🖱️ Custom Cursor (Desktop only recommended) */}
      <IntroMouseHover />

      {/* 🔝 Header */}
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

        {/* 🛟 Safe fallback */}
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>

      {/* 🔻 Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
