import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './dashboard.css';

const Dashboard = ({ location }) => {
  // Use optional chaining to safely access location.state
  const user = location?.state?.user;

  return (
    <div className="dashboard-main">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
