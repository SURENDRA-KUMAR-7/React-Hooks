import React, { useContext } from 'react'
import { GreetContext } from './A';


const D = () => {
  const usecon = useContext(GreetContext);
  return (
   <>Greet: {usecon.greet} {usecon.greet2}</>
  )
}

export default D;