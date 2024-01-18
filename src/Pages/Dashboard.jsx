import React from "react";
import "../Dashboard.css";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  const totalSales = 150000;
  const totalUsers = 500;
  const totalAssets = 750000;
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <div className="dashboard">
        <div className="card">
          <h2>Total Sales</h2>
          <p>${totalSales}</p>
        </div>
        <div className="card">
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>
        <div className="card">
          <h2>Total Assets</h2>
          <p>${totalAssets}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
