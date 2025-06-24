export default function ExportarDatos() {
  const exportarExcel = () => {
    alert("Simulación de exportación a Excel (por ahora solo alerta)");
  };

  const exportarPDF = () => {
    alert("Simulación de exportación a PDF (por ahora solo alerta)");
  };

  return (
    <div>
      <h2>Exportar Inventario</h2>
      <button onClick={exportarExcel}>Exportar a Excel</button>
      <button onClick={exportarPDF}>Exportar a PDF</button>
    </div>
  );
}