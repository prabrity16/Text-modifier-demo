// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  let [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
   })

   setTimeout(()=>{
        setAlert(null)
   } , 2000)
  }

  const removeBodyClass=()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
  }

  const toggleMode=(cls)=>{
    removeBodyClass();
    document.body.classList.add("bg-"+ cls)
     if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#073e75";
      showAlert("Dark mode is enabled" , "success")
      
      

     }
     else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled" , "success")
      // document.title = "Text converter - light mode"
     }
  }

  
  return (
    
     <>
     
     <Router>
     <Navbar title="Text-modify" abouttext="About" mode={mode}  toggleMode = {toggleMode}></Navbar>
    
     
     <Alert alert={alert}></Alert>
        
     <div className="container my-3" >
     <Routes>
          <Route path="about" element={<About mode={mode} />}>
            
          </Route> 
         
          <Route path="/"  element={<Textform heading="  Try Text-Modifier - Word counter , character counter , case conversion " mode={mode}  showAlert={showAlert}></Textform>}>
          
         
          </Route>
        </Routes>
        </div>
      </Router>
       
   


      
     
     
     
     
  

    </>
  );
}

export default App;

