import React, { createContext } from 'react'
import B from './B'

const GreetContext = createContext();

const A = () => {
    const greet = "Hello d";
    const greet2 = "Hello d g2";
  return (
    <div>A 
       <GreetContext.Provider value={{greet,greet2}}>
        <B/>
        </GreetContext.Provider>
    </div>
  )
}

export default A;
export {GreetContext};