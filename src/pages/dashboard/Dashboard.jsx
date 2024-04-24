import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import style from './dashboard.module.css';

const Dashboard = ({ location }) => {
  // Use optional chaining to safely access location.state
  const user = location?.state?.user;

  return (
    <div className={style.mainDash}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
