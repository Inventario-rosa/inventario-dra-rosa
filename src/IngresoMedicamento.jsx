
import { useState } from 'react';

export default function IngresoMedicamento() {
  const [medicamento, setMedicamento] = useState({
    nombre: '',
    presentacion: '',
    concentracion: '',
    cantidad: 0,
    vencimiento: '',
    observaciones: ''
  });

  const handleChange = (e) => {
    setMedicamento({ ...medicamento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Medicamento ingresado:", medicamento);
    alert("Medicamento registrado (solo en consola por ahora)");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingreso de Medicamentos</h2>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={medicamento.nombre} onChange={handleChange} required />
      <label>Presentación:</label>
      <select name="presentacion" value={medicamento.presentacion} onChange={handleChange} required>
        <option value="">Seleccione</option>
        <option value="Tableta">Tableta</option>
        <option value="Jarabe">Jarabe</option>
        <option value="Ampolla">Ampolla</option>
      </select>
      <label>Concentración:</label>
      <input type="text" name="concentracion" value={medicamento.concentracion} onChange={handleChange} required />
      <label>Cantidad:</label>
      <input type="number" name="cantidad" value={medicamento.cantidad} onChange={handleChange} required />
      <label>Fecha de Vencimiento:</label>
      <input type="date" name="vencimiento" value={medicamento.vencimiento} onChange={handleChange} required />
      <label>Observaciones:</label>
      <textarea name="observaciones" value={medicamento.observaciones} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}
