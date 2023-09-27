import React, { memo } from 'react'


const Newcomp = (prop) => {
  // If changes in prop when it will render 
  console.log("New comp render",prop.newCount);
  return (
    <div>Newcomp</div>
  )
}

export default memo(Newcomp);