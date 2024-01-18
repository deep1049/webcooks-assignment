import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
