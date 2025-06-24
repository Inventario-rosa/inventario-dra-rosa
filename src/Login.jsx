import React, { useState } from 'react';

export default function Login({ setLogueado, setRol }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const usuarios = [
    { username: 'usuario01', clave: 'med2024', rol: 'Dra. Rosa' },
    { username: 'usuario02', clave: '1234', rol: 'Auxiliar' }
  ];

  const handleLogin = () => {
    const encontrado = usuarios.find(u => u.username === usuario && u.clave === clave);
    if (encontrado) {
      setRol(encontrado.rol);
      setLogueado(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h2>Ingreso al Sistema</h2>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} /><br />
      <input type="password" placeholder="Contraseña" value={clave} onChange={e => setClave(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}