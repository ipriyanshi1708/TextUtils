// 1. Router not Working properly , unable to navigate between home and about without reloading the page
// 2. Initially no text is visible
// 3. Enable light mode text is not visible

import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('dark');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about"> 
            <About mode={mode} />
          </Route>
          <Route exact path="/">
      <TextForm heading="TextUtils-Word Counter | Character Counter | Copy Text" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
       </Router>
    </> 
  );
}

export default App;
