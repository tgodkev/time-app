import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';

function App(){
  function start(){
    setInterval(updateTime, 1000);
  }
  const now = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(now);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString("it-IT");
    setTime(newTime);
  }

  return(
    <div className="container">
    <h1>{time}</h1>
    <button onClick={updateTime}>Get Time</button>
    <button onClick={start}>Start real Time</button>
    <Footer />
    </div>
  );





}




export default App;
