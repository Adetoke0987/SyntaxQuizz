import React from 'react';
import Navbar from '../navigation/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the layout fills the entire viewport
  };

  const contentStyle = {
    flex: 1, // Allow the content to grow and fill the remaining space
    padding: '20px', // Add some padding to the content area
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
