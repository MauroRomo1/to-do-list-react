import { InputGroup, Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");

  const [listaTareas, setListaTareas] = useState([]);

  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder="Ingrese una tarea..."
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
