import React, { useState } from 'react';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: '', username: '', clave: '', rol: '' });

  const agregar = () => {
    setUsuarios([...usuarios, nuevo]);
    setNuevo({ nombre: '', username: '', clave: '', rol: '' });
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <input placeholder="Nombre" value={nuevo.nombre} onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} />
      <input placeholder="Usuario" value={nuevo.username} onChange={e => setNuevo({ ...nuevo, username: e.target.value })} />
      <input type="password" placeholder="Clave" value={nuevo.clave} onChange={e => setNuevo({ ...nuevo, clave: e.target.value })} />
      <select value={nuevo.rol} onChange={e => setNuevo({ ...nuevo, rol: e.target.value })}>
        <option value="">Seleccione Rol</option>
        <option value="Dra. Rosa">Dra. Rosa</option>
        <option value="Auxiliar">Auxiliar</option>
      </select>
      <button onClick={agregar}>Agregar</button>
      <ul>
        {usuarios.map((u, i) => (
          <li key={i}>{u.nombre} - {u.username} - {u.rol}</li>
        ))}
      </ul>
    </div>
  );
}