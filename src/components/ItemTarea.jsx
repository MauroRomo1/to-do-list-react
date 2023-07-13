import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      Planificar
      <Button variant="danger" size="sm">
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
