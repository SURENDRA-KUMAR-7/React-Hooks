function App() {
    const initiaData = ()=>{
      console.log("I am here");
      return 0;
    }
  
    // const [count, setCount] = useState(initiaData()); no work proprly
    // const [count, setCount] = useState(() => initiaData()); work fine
    const [count, setCount] = useState(initiaData);

    const plus = ()=>{
      // setCount(count+1);  over write problem
      // setCount(count+1);
      // setCount(count+1);
      setCount((prevcount)=> prevcount+1);
      setCount((prevcount)=> prevcount+1);
      setCount((prevcount)=> prevcount+1);
      console.log(count);
    }

    const sub = ()=>{
      setCount(count - 1);
      console.log(count);
    }
  
  
    return (
      <>
      <button onClick={plus}>plus</button>
     <h3>{count}</h3>
      <button onClick={sub}>sub</button>
      </> 
     
    )
  }
  export default App;
  