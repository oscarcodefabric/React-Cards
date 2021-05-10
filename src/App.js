import './App.css';
import Card from './Card'

const adrian = { id : 0, name: 'Adrian', color: 'red'}
const oscar = { id : 1, name: 'Oscar', color: 'blue' }
const edson = { id : 2, name: 'Adrian', color: 'green' }
const carlos = { id : 3, name: 'Carlos', color: 'cyan' }

const reactClass = [adrian, oscar, edson, carlos]

function App() {
  return (
    <div className="App">
        {reactClass.map((student, index) =>
        <Card key = {index} student={student}/>)}
    </div>
  );
}

export default App;
