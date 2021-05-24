import './style.css'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import React , { useState } from 'react';
import { deleteItem, setCheck } from '../../actions/rootActions'
import { connect } from 'react-redux'

function ListItem({student, index, doSetCheck, doDeleteItem}){
    const [checked, setChecked] = useState(false)
    /*const handleClickCheckbox= ()=>{
        setChecked(!checked)
    }*/
    
    return(
        <Col>
            <Form.Check
            id={index}
            checked= {student.checked}
            label={student.name}
            onChange={()=>doSetCheck(student.id)}
            className = 'list-item'/>
            <Button onClick = {() =>doDeleteItem(student.id)}>Delete</Button>
            <Dropdown.Divider/>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => ({
  doSetCheck: item => dispatch(setCheck(item)),
  doDeleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(ListItem)
 