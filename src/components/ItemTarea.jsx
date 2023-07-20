import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button
        onClick={() => borrarTarea(tarea)}
        title="Borrar tarea"
        variant="danger"
        size="sm"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
