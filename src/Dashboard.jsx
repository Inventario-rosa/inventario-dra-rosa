import React from 'react';
import Usuarios from './Usuarios';
import Logout from './Logout';

export default function Dashboard({ rol, setLogueado }) {
  return (
    <div>
      <h1>Sistema Inventario Dra Rosa - {rol}</h1>
      {rol === 'Dra. Rosa' && <Usuarios />}
      <Logout setLogueado={setLogueado} />
    </div>
  );
}