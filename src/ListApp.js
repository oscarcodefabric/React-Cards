import Container from 'react-bootstrap/Container'
import List from './components/List/List'

const adrian = { name: 'Adrian', color: 'red', description: 'Lorem Ipsum '}
const oscar = { name: 'Oscar', color: 'blue' , description: 'Lorem Ipsum '}
const edson = { name: 'Edson', color: 'green' , description: 'Lorem Ipsum '}
const carlos = { name: 'Carlos', color: 'cyan' , description: 'Lorem Ipsum '}
const jimmy = {  name: 'Jimmy', color: 'magenta' , description: 'Lorem Ipsum '}

const reactClass = [adrian, oscar, edson, carlos, jimmy]

function ListApp() {
  return (
    <Container className="App">
        
        <List students = {reactClass}/>
    </Container>
  );
}

export default ListApp;
