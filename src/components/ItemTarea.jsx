import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <div className="d-flex gap-2">
        <Button
          onClick={() => borrarTarea(tarea)}
          title="Borrar tarea"
          variant="danger"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
        <Button title="marcar como lista" variant="primary">
          <FontAwesomeIcon icon={faSquareCheck} />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
