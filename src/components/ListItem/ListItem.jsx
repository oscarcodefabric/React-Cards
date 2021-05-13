import './style.css'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';

function ListItem({student, index}){
    const [checked, setChecked] = useState(false)
    const handleClickCheckbox= ()=>{
        console.log(!checked)
        setChecked(!checked)
    }
    return(
        <Col>
            <Form.Check 
            id={index}
            checked= {checked}
            label={student.name}
            onChange={()=>handleClickCheckbox()}
            />
            <Dropdown.Divider/>
        </Col>
    )
}

export default ListItem
 