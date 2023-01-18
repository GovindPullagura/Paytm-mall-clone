import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
