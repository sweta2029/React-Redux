import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddPost from "./components/AddPost";
import Home from "./components/Home";
import HomeList from "./components/HomeList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            DASHBOARD
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                ADD
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomeList />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/posts/:id" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
