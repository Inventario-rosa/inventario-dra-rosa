import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default function App() {
  const [logueado, setLogueado] = useState(false);
  const [rol, setRol] = useState('');

  if (!logueado) return <Login setLogueado={setLogueado} setRol={setRol} />;
  return <Dashboard rol={rol} setLogueado={setLogueado} />;
}