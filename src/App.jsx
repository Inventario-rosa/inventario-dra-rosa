
import { useState } from "react";
import InventarioMedicamentos from "./InventarioMedicamentos";

function App() {
  const [logueado, setLogueado] = useState(false);
  const [usuario, setUsuario] = useState("");

  const usuarios = [
    { usuario: "usuario01", clave: "med2024", nombre: "Dra. Rosa" },
    { usuario: "usuario02", clave: "1234", nombre: "Auxiliar" }
  ];

  const login = (user, pass) => {
    const encontrado = usuarios.find(u => u.usuario === user && u.clave === pass);
    if (encontrado) {
      setUsuario(encontrado.nombre);
      setLogueado(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  if (!logueado) {
    return (
      <div style={{ margin: "2rem" }}>
        <h2>Ingreso al sistema</h2>
        <input placeholder="Usuario" id="user" /><br />
        <input placeholder="Contraseña" id="pass" type="password" /><br /><br />
        <button onClick={() => login(document.getElementById('user').value, document.getElementById('pass').value)}>Ingresar</button>
      </div>
    );
  }

  return <InventarioMedicamentos usuario={usuario} />;
}

export default App;
