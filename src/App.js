// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not 

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light', 'bg-dark', 'bg-warning', 'bg-danger', 'bg-primary', 'bg-success');
  // };
   

  const toggleMode = (cls) => {
    // removeBodyClasses();

    // if (cls) {
    //   document.body.classList.add('bg-' + cls);
    //   console.log(cls);
    // }

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#05203c" //#383b3e
      showAlert("Dark Mode has been enabled", "success")
      // document.title = "TextUtils - DarkMode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
      // document.title = "TextUtils - LightMode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
        {/* In React Router v6, the 'Switch' component was removed and replaced by the 'Routes' component. The 'Routes' component functions similarly to 'Switch' but with some improvements and changes to match the new API in React Router v6. */}
          <Routes>
            <Route 
              path="/about" 
              element={<About mode={mode}/>} 
            />

            <Route 
              path="/" 
              element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} toggleMode={toggleMode} />}
            />
            {/* <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} toggleMode={toggleMode} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
