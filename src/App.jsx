import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPostList from "./components/BlogPostList";
import BlogPost from "./components/BlogPost";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
