import { Container, Row, Button } from "react-bootstrap";

const Home = () => (
  <Container>
    <section className="mt-4 p-3 bg-dark border rounded">
      <h1>Catalogo</h1>
      <Row>
        <p>Aqui van las musicas con sus categorias</p>
      </Row>
    </section>
    <section className="mt-4 p-3 bg-dark border rounded text-center">
      <h4>Crea tu cuenta ahora</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
        perferendis repellat repellendus harum! Alias ea expedita eveniet facere
        et dignissimos culpa iusto corrupti, commodi libero
      </p>
      <Button>Crear Cuenta</Button>
    </section>
  </Container>
);

export default Home;
