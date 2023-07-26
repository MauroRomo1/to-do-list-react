import { InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  let tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "<h6>Debes de ingresar una tarea</h6>",
      });
    } else {
      setListaTareas([...listaTareas, tarea.trim()]);
      setTarea("");
    }
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
