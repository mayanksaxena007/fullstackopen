import { useState } from 'react'
const App=()=>{
  const [left,setLeft]=useState(0)
  const [right,setRight]=useState(0)
  const [allClicks,setAllClicks]=useState([])

  const handleLeftClick=()=>{
    setAllClicks(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick=()=>{
    setAllClicks(allClicks.concat('R'))
    setRight(right+1)
  }
  // debugger
  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      <br/>
      <p>{left}</p>
      <p>{right}</p>
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App