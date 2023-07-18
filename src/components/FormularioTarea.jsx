import { InputGroup, Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");

  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder="Ingrese una tarea..."
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </InputGroup>
      </Form>
      <ListaTareas />
    </>
  );
};

export default FormularioTarea;
