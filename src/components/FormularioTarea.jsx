import { InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");

  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (tareaBorrar) => {
    let listaTareaFiltrada = listaTareas.filter(
      (itemTarea) => tareaBorrar !== itemTarea
    );

    setListaTareas(listaTareaFiltrada);
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
          <Button title="Añadir tarea" variant="primary" type="submit">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InputGroup>
      </Form>
      <ListaTareas propsListaTareas={listaTareas} borrarTarea={borrarTarea} />
    </>
  );
};

export default FormularioTarea;
