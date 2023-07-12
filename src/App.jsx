import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Col, Container, Row } from "react-bootstrap";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/listaTareas";

function App() {
  return (
    <>
      <main>
        <h3 className="text-center text-white my-5">Lista de tareas</h3>
        <Container>
          <Row>
            <Col>
              <FormularioTarea />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListaTareas />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="text-center p-3">
        <h5>&copy; Todos los derechos reservados.</h5>
      </footer>
    </>
  );
}

export default App;
