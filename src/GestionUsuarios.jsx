
import { useState } from 'react';

export default function GestionUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '',
    username: '',
    clave: '',
    rol: ''
  });

  const handleChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoUsuario({ nombre: '', username: '', clave: '', rol: '' });
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={nuevoUsuario.nombre} onChange={handleChange} required />
        <label>Usuario:</label>
        <input type="text" name="username" value={nuevoUsuario.username} onChange={handleChange} required />
        <label>Contraseña:</label>
        <input type="password" name="clave" value={nuevoUsuario.clave} onChange={handleChange} required />
        <label>Rol:</label>
        <select name="rol" value={nuevoUsuario.rol} onChange={handleChange} required>
          <option value="">Seleccione</option>
          <option value="Dra. Rosa">Dra. Rosa</option>
          <option value="Auxiliar">Auxiliar</option>
        </select>
        <button type="submit">Agregar Usuario</button>
      </form>

      <h3>Lista de Usuarios</h3>
      <ul>
        {usuarios.map((u, index) => (
          <li key={index}>{u.nombre} ({u.rol}) - {u.username}</li>
        ))}
      </ul>
    </div>
  );
}
