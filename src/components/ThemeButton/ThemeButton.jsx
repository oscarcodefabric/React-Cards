import Form from 'react-bootstrap/form'
import ThemeContext from '../../context/ThemeContext'
import { useContext } from 'react'



function ThemeButton() {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  const handleClickSwitch = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        onChange={() => handleClickSwitch()}
      />
    </Form>
  )
}

export default ThemeButton