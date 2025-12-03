import ItemList from "./ItemList";
import { Table } from "react-bootstrap";
import { Link } from "react-router";

function Administracion({ canciones, eliminarCancion }) {
  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between mb-4">
        <h1>Administrar Canciones</h1>
        <Link to="crearCancion" className="btn btn-primary">
          Nueva Canción
        </Link>
      </div>

      {canciones.length === 0 ? (
        <div className="text-center bg-dark p-3 rounded">
          <p>Todavía no hay canciones cargadas.</p>
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Canción</th>
              <th>Album</th>
              <th>Año</th>
              <th>Categoría</th>
              <th>Duración</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {canciones.map((song, indice) => (
              <ItemList
                fila={indice + 1}
                key={song.id}
                song={song}
                eliminarCancion={eliminarCancion}
              />
            ))}
          </tbody>
        </Table>
      )}
    </main>
  );
}
export default Administracion;
