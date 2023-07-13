import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Col, Container, Row } from "react-bootstrap";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <main>
        <Container>
          <h1 className="text-center text-white my-5">Lista de tareas</h1>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <FormularioTarea />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="text-center p-3">
        <h6>&copy; Todos los derechos reservados.</h6>
      </footer>
    </>
  );
}

export default App;
