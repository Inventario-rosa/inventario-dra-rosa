export default function Backup() {
  const realizarBackup = () => {
    alert("Simulación de backup en la nube (por ahora solo alerta)");
  };

  return (
    <div>
      <h2>Backup Automático</h2>
      <button onClick={realizarBackup}>Realizar Backup</button>
    </div>
  );
}