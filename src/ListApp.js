import Container from 'react-bootstrap/Container'
import List from './components/List/List'
import ThemeContext from './context/ThemeContext'
import { useState, useEffect } from 'react'
import ThemeButton from './components/ThemeButton/ThemeButton'
import { connect } from 'react-redux'


const ListApp = ( { title } ) => {
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
        <List/>
    </Container>
  );
}

const mapStateToProps = state => ({
  title : state.title 
})

const ListAppConnect = connect(mapStateToProps)(ListApp)

export default ListAppConnect;
