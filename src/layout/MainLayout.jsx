import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
  };

  const contentStyle = {
    flex: 1, 
    padding: '20px', 
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
