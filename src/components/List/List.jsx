import ListItem from "../ListItem/ListItem";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";


function List({ title, items }) {
  return (
    <Row>
      <Col className="my-5">
        <h5>{title}</h5>
      </Col>
      {items.map((student, index) => (
        <ListItem key={index} student={student} />
      ))}
    </Row>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  items: state.reactClass,
});

export default connect(mapStateToProps)(List);
