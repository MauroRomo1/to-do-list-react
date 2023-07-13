import { InputGroup, Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Ingrese una tarea"
            aria-label="Ingrese una tarea"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2">
            Enviar
          </Button>
        </InputGroup>
      </Form>
      <ListaTareas />
    </>
  );
};

export default FormularioTarea;
