import React from 'react';
import Navbar from '../components/navigation/Navbar';
// import { useColorMode } from '../context/ColorModeContext';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

  // const { theme } = useColorMode();

  const contentStyle = {
    flex: 1, 
    padding: '20px', 
  };

  return (
    <div>
      <Navbar />
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
