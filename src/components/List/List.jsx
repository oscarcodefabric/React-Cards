import ListItem from '../ListItem/ListItem'
import Row from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addItem } from '../../actions/rootActions'
import { useState } from 'react'

function List({ title, items, doAddItem }) {
  const [addingElement, setAdding] = useState(false)
  const handleClickAddElement = () => {
    setAdding(!addingElement)
  }
  return (
    <Row>
      <Col className="my-5">
        <h5>{title}</h5>
      </Col>
      {items.map((student, index) =>
        <ListItem key={index} student={student} />
      )}

      {addingElement
        ? <Form>
          <Form.Control
            //onChange={()=>handleClickCheckbox()}
            className='list-item' />
          <Button type="submit" onClick={() => (handleClickAddElement(), doAddItem({ name: 'Raul' }))}>Add New Item</Button>
        </Form>
        : <Col><Button onClick={() => handleClickAddElement()}>Add New Item</Button></Col>
      }

    </Row>
  )
}


const mapStateToProps = (state) => ({
  title: state.title,
  items: state.reactClass
})

const mapDispatchToProps = (dispatch) => ({
  doAddItem: id => dispatch(addItem(id))

})


export default connect(mapStateToProps, mapDispatchToProps)(List)