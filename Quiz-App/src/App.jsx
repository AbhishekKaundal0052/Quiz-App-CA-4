import React, { useEffect,useState } from 'react'
import './App.css'
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';
import logo from './assets/Kalvium-Logo-SVG.svg'

function App() {
  const [Theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(Theme === "Light" ? "dark" : "Light");
    document.body.classList.toggle("Dark");
  };
  
  return (
    <>
   <nav>
      <div id="logo">
        {/* <img src={logo} alt="logo"/> */}
      </div>
      <button className="Darkbtn" onClick={changeTheme}>{Theme}</button>
    </nav>
    <QuestionBox/>
    {/* <Result/> */}
    </>
  )
}

export default App
