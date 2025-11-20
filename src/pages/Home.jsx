import { Card, Button } from 'react-bootstrap';

const Home = () => (
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Bienvenido</Card.Title>
      <Card.Text>Esta es la página principal con React Bootstrap.</Card.Text>
      <Button variant="primary">Explorar</Button>
    </Card.Body>
  </Card>
);

export default Home;