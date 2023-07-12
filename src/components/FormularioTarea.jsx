import { InputGroup, Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
  return (
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
  );
};

export default FormularioTarea;
