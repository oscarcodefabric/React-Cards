import { connect } from "react-redux";
import { addItem } from "../../actions/rootActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Col from "react-bootstrap/Col";

function AddButton({ doAddItem }) {
  const [addingElement, setAdding] = useState(false);
  const [element, setElement] = useState("");
  const handleClickAddElement = () => {
    setAdding(!addingElement);
  };
  const handleChange = (event) => setElement(event.target.value);
  return (
    <Col>
      {addingElement ? (
        <Form>
          <Form.Group>
            <Form.Control onChange={handleChange} className="list-item" />
            <Button
              type="submit"
              onClick={() => (
                handleClickAddElement(),
                doAddItem({ name: element, checked: false })
              )}
            >
              Add New Item
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <Button onClick={() => handleClickAddElement()}>Add New Item</Button>
      )}
    </Col>
  );
}

const mapDispatchToProps = (dispatch) => ({
  doAddItem: (id) => dispatch(addItem(id)),
});

export default connect(null, mapDispatchToProps)(AddButton);
