import { Button, ListGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button
        onClick={() => borrarTarea(tarea)}
        title="Borrar tarea"
        variant="danger"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
