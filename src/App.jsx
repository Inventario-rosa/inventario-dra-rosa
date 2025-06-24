import { useState } from 'react';
import IngresoMedicamento from './IngresoMedicamento';
import GestionUsuarios from './GestionUsuarios';
import Historial from './Historial';
import ExportarDatos from './ExportarDatos';
import Backup from './Backup';

export default function App() {
  const [logueado, setLogueado] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState("");
  const [rolActivo, setRolActivo] = useState("");

  const usuariosValidos = [
    { username: "usuario01", clave: "med2024", rol: "Dra. Rosa" },
    { username: "usuario02", clave: "1234", rol: "Auxiliar" }
  ];

  const login = (user, pass) => {
    const encontrado = usuariosValidos.find(u => u.username === user && u.clave === pass);
    if (encontrado) {
      setUsuarioActivo(encontrado.username);
      setRolActivo(encontrado.rol);
      setLogueado(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  if (!logueado) {
    return (
      <div style={{ margin: "2rem" }}>
        <h2>Ingreso al Sistema</h2>
        <input placeholder="Usuario" id="user" /><br />
        <input placeholder="Contraseña" id="pass" type="password" /><br /><br />
        <button onClick={() => login(document.getElementById('user').value, document.getElementById('pass').value)}>Ingresar</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Sistema Inventario Dra. Rosa - {rolActivo}</h1>
      <IngresoMedicamento />
      <hr />
      {rolActivo === "Dra. Rosa" && <GestionUsuarios />}
      {rolActivo === "Dra. Rosa" && <hr />}
      <Historial />
      <hr />
      <ExportarDatos />
      <hr />
      <Backup />
    </div>
  );
}