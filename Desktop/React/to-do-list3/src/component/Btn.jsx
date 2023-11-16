import React from 'react'

function Btn({BtnFunc, todo, children}) {
    
  return (
         <button onClick={() => BtnFunc(todo)}>{children}</button>
  )
}

export default Btn