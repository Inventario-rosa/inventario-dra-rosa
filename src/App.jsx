import React from 'react';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import Backup from './pages/Backup';
import Logout from './components/Logout';

export default function App() {
  return (
    <div>
      <h1>Inventario Dra Rosa</h1>
      <Login />
      <Usuarios />
      <Backup />
      <Logout />
    </div>
  );
}