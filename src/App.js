import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Login from "./components/Shared/Login";
import Signup from "./components/Shared/Signup";
import AuthConatiner from "./components/AuthConatiner";
import BlogEditor from "./components/BlogEditor";
import PostsBoard from "./pages/PostsBoard";
import Article from "./components/Homepage/Article";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={
            <AuthConatiner>
              <Login />
            </AuthConatiner>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthConatiner>
              <Signup />
            </AuthConatiner>
          }
        />
        <Route path="/create" element={<PostsBoard />} />
        <Route path="/posts/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
