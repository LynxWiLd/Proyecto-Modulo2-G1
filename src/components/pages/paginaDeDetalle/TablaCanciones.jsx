import ItemCancion from "../../complementos/ItemCancion";
import { Table } from "react-bootstrap";

const TablaCanciones = ({ canciones }) => {
  return (
    <section className="px-3 mb-5 table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Album</th>
            <th>Artista</th>
            <th>Titulo</th>
            <th>Categoría</th>
            <th>Duración</th>
            <th>Escuchar</th>
          </tr>
        </thead>
        <tbody>
         
          {canciones.map((cancion, indice) => (
            <ItemCancion
              key={cancion.id}
              cancionRecomendada={cancion}
              fila={indice + 1}
            ></ItemCancion>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default TablaCanciones;
