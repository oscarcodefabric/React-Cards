//import './Card.css';
import BSCard from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

function Card({student}){
    const {name , color, description} = student
    return(
        <Col xs={3}>
            <BSCard className="my-2">
                <BSCard.Header><BSCard.Title><h4 style={{color: color}}><b>{name}</b></h4></BSCard.Title></BSCard.Header>
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