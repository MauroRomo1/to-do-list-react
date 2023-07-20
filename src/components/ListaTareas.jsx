import React from "react";
import ItemTarea from "./ItemTarea";
import { ListGroup } from "react-bootstrap";

const ListaTareas = ({ propsListaTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {propsListaTareas.map((tarea, index) => (
        <ItemTarea
          key={index}
          tarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
