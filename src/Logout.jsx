import React from 'react';

export default function Logout({ setLogueado }) {
  return <button onClick={() => setLogueado(false)}>Cerrar Sesión</button>;
}