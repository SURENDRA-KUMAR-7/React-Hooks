import React, { useEffect, useMemo, useState } from 'react'


const App = () => {
  
  const [count, setcount] = useState(0);
  const [input, setinput] = useState('')

  const hanleInput = (e)=>{
    setinput(e.target.value)
  }

const fun = ()=>{
  console.log("Hey I am a slow function");
  return 'i am return';
}
//useMemo return value
 const a = useMemo(fun,[input]);
 console.log(a);



//  useMemo calulatet and return but useEffect doesn't calulatet and return value


  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>setcount((pre)=>pre+1)}>click me</button><br />
     <input type="text" onChange={hanleInput} value={input}/>
    <h1>Input: {input}</h1>
  
    </div>
  )
}

export default App