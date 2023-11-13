import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import "./App.css";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/LandingPage" replace />} />
            <Route path="/LandingPage" element={<LandingPage/>} />
            <Route path="/LandingPage/DetailPage" element={<DetailPage/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <footer>
        <Link to="/LandingPage" className="iconWrapper">
          Home
        </Link>
        <Link to="/profile" className="iconWrapper">
          Profile
        </Link>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;