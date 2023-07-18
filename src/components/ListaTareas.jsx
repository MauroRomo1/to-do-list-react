import React from "react";
import ItemTarea from "./ItemTarea";
import { ListGroup } from "react-bootstrap";

const ListaTareas = ({ propsListaTareas }) => {
  return (
    <ListGroup>
      {propsListaTareas.map((tarea) => (
        <ItemTarea key={tarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
