import { InputGroup, Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

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
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </InputGroup>
      </Form>
      <ListaTareas propsListaTareas={listaTareas} borrarTarea={borrarTarea} />
    </>
  );
};

export default FormularioTarea;
