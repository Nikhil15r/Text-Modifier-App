import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }

  return (
    <Router>
      <Navbar title='Text-Modifier' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}>
        </Route>
        <Route exact path="/" element={ <Textarea heading='Text Transformation Tool: Uppercase, Lowercase, Space Removal, Convert, and More' mode={mode} showAlert={showAlert} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
