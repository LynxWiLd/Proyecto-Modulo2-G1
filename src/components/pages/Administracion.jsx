import ItemList from "./ItemList";
import { Table } from "react-bootstrap";
import { Link } from "react-router";

function Administracion({ canciones, eliminarCancion, editarCancion }) {
  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between mb-4">
        <h1>Administrar Canciones</h1>
        <Link
          to="crearCancion"
          className="btn btn-success px-4 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 centrado"
          
        >
          ➕ Nueva Canción
        </Link>
      </div>

      {canciones.length === 0 ? (
        <div className="text-center bg-dark p-3 rounded">
          <p>Todavía no hay canciones cargadas.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="align-middle text-center">
            <thead className="table-dark">
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
                  editarCancion={editarCancion}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </main>
  );
}

export default Administracion;
