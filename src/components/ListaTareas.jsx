import React from "react";
import ItemTarea from "./ItemTarea";
import { ListGroup } from "react-bootstrap";

const ListaTareas = () => {
  return (
    <ListGroup>
      <ItemTarea></ItemTarea>
      <ItemTarea></ItemTarea>
      <ItemTarea></ItemTarea>
      <ItemTarea></ItemTarea>
    </ListGroup>
  );
};

export default ListaTareas;
