import IngresoMedicamento from './IngresoMedicamento';
import GestionUsuarios from './GestionUsuarios';
import Historial from './Historial';
import ExportarDatos from './ExportarDatos';

export default function App() {
  return (
    <div>
      <h1>Sistema Inventario Dra. Rosa</h1>
      <IngresoMedicamento />
      <hr />
      <GestionUsuarios />
      <hr />
      <Historial />
      <hr />
      <ExportarDatos />
    </div>
  );
}