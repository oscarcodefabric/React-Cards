import './App.css';
import Card from './components/Card/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const adrian = { name: 'Adrian', color: 'red', description: 'Lorem Ipsum '}
const oscar = { name: 'Oscar', color: 'blue' , description: 'Lorem Ipsum '}
const edson = { name: 'Adrian', color: 'green' , description: 'Lorem Ipsum '}
const carlos = { name: 'Carlos', color: 'cyan' , description: 'Lorem Ipsum '}
const jimmy = {  name: 'Jimmy', color: 'magenta' , description: 'Lorem Ipsum '}

const reactClass = [adrian, oscar, edson, carlos, jimmy]

function App() {
  return (
   
    <Container fluid className="App">
      <Row>
        {reactClass.map((student, index) =>
        <Card key = {index} student={student}/>)}
      </Row>
    </Container>
  );
}

export default App;
