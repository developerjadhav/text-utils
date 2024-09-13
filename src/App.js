import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';


function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemodedark = () => {
    if (mode !== "dark") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
    }
  }

  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={togglemodedark}/>
        <Alert alert={alert} />
        <div className='container my-3'>
          <TextForm heading="Try TextUtils Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode} />
          <About mode={mode} />
        </div>
        <Footer mode={mode} />
    </>
  );
}

export default App;