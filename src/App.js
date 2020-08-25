import React, { useState } from 'react';
import './App.css';
import Canvas from "./Canvas"

function App() {

  const [frame, setFrame] = useState(createFrame(20, 20))
  const [drawing, setDrawing] = useState(false)

  // function to create a frame array of width x height
  function createFrame(width, height) {
    const frame = []
    for (let i = 0; i < height; i++) {
      const row = []
      for (let j = 0; j < width; j++) {
        row.push(false)
      }
      frame.push(row)
    }
    return frame
  }

  return (
    <div 
      className="App"
      onMouseUp={ e => setDrawing(false)} >
      <Canvas
        frame={ frame }
        setFrame= { setFrame }
        drawing={ drawing }
        setDrawing={ setDrawing } />
    </div>
  );
}

export default App;
