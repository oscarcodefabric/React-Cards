import './style.css'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import React , { useState } from 'react';


function ListItem({student, index}){
    const [checked, setChecked] = useState(false)
    const handleClickCheckbox= ()=>{
        setChecked(!checked)
    }
    
    return(
        <Col>
            <Form.Check
            id={index}
            checked= {checked}
            label={student.name}
            onChange={()=>handleClickCheckbox()}
            className = 'list-item'/>
            <Dropdown.Divider/>
        </Col>
    )
}

export default ListItem
 