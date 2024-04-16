import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainLayout />
      <RouterProvider router={router} />
    </Router>
  );
};

export default App;
