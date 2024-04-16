import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
