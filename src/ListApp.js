import Container from 'react-bootstrap/Container'
import List from './components/List/List'
import ThemeContext from './context/ThemeContext'
import { useState, useEffect } from 'react'
import ThemeButton from './components/ThemeButton/ThemeButton'

const adrian = { name: 'Adrian', color: 'red', description: 'Lorem Ipsum '}
const oscar = { name: 'Oscar', color: 'blue' , description: 'Lorem Ipsum '}
const edson = { name: 'Edson', color: 'green' , description: 'Lorem Ipsum '}
const carlos = { name: 'Carlos', color: 'cyan' , description: 'Lorem Ipsum '}
const jimmy = {  name: 'Jimmy', color: 'magenta' , description: 'Lorem Ipsum '}

const reactClass = [adrian, oscar, edson, carlos, jimmy]

function ListApp() {

  const [darkTheme, darkThemeSet] = useState(true)
  
  useEffect(() => {
    document.querySelector('body').style.background = darkTheme? 'white' : 'black'
    document.querySelector('body').style.color = darkTheme? 'black' : 'white' 
  }, [darkTheme]);
  
  return (
    <Container 
    className="App"
   >
        <ThemeContext.Provider value = {[darkTheme, darkThemeSet]}> 
            <ThemeButton></ThemeButton>
        </ThemeContext.Provider>
        <List students = {reactClass}/>
    </Container>
  );
}

export default ListApp;
