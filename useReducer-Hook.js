import { useReducer } from 'react';
import './App.css';
// import Navbar from './components/Navbar';  

const reducer = (state,action) =>{
  switch(action.type){
    case "INCREMENT":
      return { ...state,count:state.count+1}
      case "DECREMENT":
        return { ...state,count:state.count-1}
      case "TOGGLE_HIDDEN":
        return { ...state,hidden: !state.hidden}
        default:
          return state;
      }
  }


function App() {
  

  const [state, dispatch] = useReducer(reducer, {count: 0, hidden: false})
  
  return (
    <>
    
    <h1>Count: {state.count}</h1>
    <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Increment</button>
    <button onClick={()=>dispatch({type: 'DECREMENT'})}>Decrement</button>
    <button onClick={()=>dispatch({type: 'TOGGLE_HIDDEN'})}>Hide</button>
    {state.hidden ? <h1>Hidden</h1> : <h1>Not Hidden</h1>}
   
    </> 
  )
}

export default App;
