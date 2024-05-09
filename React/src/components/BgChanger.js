import React, { useState } from 'react'

const BgChanger = () => {

    let [bgColor, setBgColor] = useState("black")

  return (
    <div style={{backgroundColor: bgColor, height: '100vh'}}>
      <button onClick={() => setBgColor(bgColor === 'black' ? 'white' : 'black')}>Welcome to {bgColor} mode, Click to change</button>
    </div>
  )
}

export default BgChanger
