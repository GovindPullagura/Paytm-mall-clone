import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MenPage from "../Pages/MenPage";
import Mobiles from "../Pages/Mobiles";
import NotFound from "../Pages/NotFound";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import WomenPage from "../Pages/WomenPage";
import ProductDetails from "../Pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Admin from "../Pages/Admin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:product_id" element={<ProductDetails />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
