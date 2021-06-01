import ListItem from "../ListItem/ListItem";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchPokemon } from "../../actions/rootActions";
import { useEffect } from "react";


function List({ title, items, doFetchPokemon }) {
  useEffect(() => {
    doFetchPokemon()
  }, [doFetchPokemon])
  
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
  items: state.pokemon,
});

const mapDispatchToProps = () => (dispatch) => ({
  doFetchPokemon: () => dispatch(fetchPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
