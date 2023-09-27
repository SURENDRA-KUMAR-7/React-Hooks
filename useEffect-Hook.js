import { useEffect, useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';  

function App() {
  

  const [count, setCount] = useState(0);
  
  const plus = ()=>{
    setCount((prevcount)=> prevcount+1);
    console.log(count);
  }
  const sub = ()=>{
    setCount(count - 1);
    console.log(count);
  }

  // useEffect function run on first load and any changes
useEffect(()=>{
  setCount((prevcount)=> prevcount+1);
  console.log("Auto Trigger");

  return ()=>{
    setCount((prevcount)=> prevcount+1);
  }
},[])



  return (
    <>
    <button onClick={plus}>plus</button>
   <h3>{count}</h3>
    <button onClick={sub}>sub</button>
    </> 
   
  )
}

export default App;
