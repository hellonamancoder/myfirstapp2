// import logo from './logo.svg';
import  React,{ useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light")
  const [modeswitchname,setmodeswitchname] = useState("Enbale Dark Mode")
  const [alert , setAlert] = useState(null)

  const showalert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
     setTimeout(() => {
     setAlert(null)
      
     }, 1000);
  }

  
  

  const toggleMode =()=>{
    if(mode ==='light'){
      setmode('dark')
      setmodeswitchname("Disable Dark Mode")
      document.body.style.backgroundColor = "#042743"
      showalert("Dark mode has been enabled" , "success")
      document.title = "Textutils - DarkMode"
    }
    else{
      setmode('light')
      setmodeswitchname("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showalert("Light mode has been enabled" , "success")
      document.title = "Textutils - LightMode"
      


    }

  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="AboutTextUtils" mode={mode} toggleMode={toggleMode} switchnamechange={modeswitchname} />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about"
            element={<About mode={mode} />}/>
          
          <Route exact path="/"
           element ={<Textform title="Enter the text to analyse" mode={mode} showalert={showalert} alert={alert}/>}
          />
     </Routes>
   </Router>
      
    </>
  );
}

export default App;
