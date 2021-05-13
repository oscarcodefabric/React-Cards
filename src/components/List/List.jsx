import ListItem from '../ListItem/ListItem'
import Row from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

function List({students}){
    
    return(
        <Row>
            <Col className="my-5">
            <h5>List of React Class Members</h5>
            </Col>
            {students.map((student, index) =>
               <ListItem key = {index} student = {student}/>            )}
        </Row>
    )
}

export default List;