//import './Card.css';
import BSCard from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import FormCheck from 'react-bootstrap/FormCheck'
import Row from 'react-bootstrap/Row'
import { useState } from 'react';

function Card({student}){
    const {name , color, description} = student
    const [checked, setChecked] = useState(true)
    const handleClickCheckbox= ()=>{
        console.log(!checked)
        setChecked(!checked)
    }
    return(
        <Col xs={3}>
            <BSCard className="my-2">
                <BSCard.Header>
                    <Row>
                        <Col xs={2}>
                            <FormCheck.Input checked={checked} onChange={()=>handleClickCheckbox()}></FormCheck.Input>
                        </Col>
                        {checked &&
                        <Col>
                            <BSCard.Title><h4 style={{color: color}}><b>{name}</b></h4></BSCard.Title>
                        </Col>
                        }
                    </Row>
                </BSCard.Header>
                <BSCard.Body>
                    
                    <BSCard.Text>{description}</BSCard.Text>
                </BSCard.Body>
                <div>
                    
                </div>
            </BSCard>
        </Col>
    )
    
}
export default Card