import React, { useState } from 'react';
import './App.css';
import Canvas from "./Canvas"
import Toolbox from "./Toolbox"

function App() {

  const [frames, setFrames] = useState(createFrames(20, 20))
  const [drawing, setDrawing] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [numberOfFrames, setNumberOfFrames] = useState(64)

  // function to create a frame array of width x height
  function createFrames(width, height) {
    const frames = []
    for (let i = 0; i < 64; i++) {
      const frame = []
      for (let j = 0; j < height; j++) {
        const row = []
        for (let k = 0; k < width; k++) {
          row.push(false)
        }
        frame.push(row)
      }
      frames.push(frame)
    }
    return frames
  }

  return (
    <div 
      className="App"
      onMouseUp={ e => setDrawing(false) } >
      <Canvas
        frames={ frames }
        currentFrame={ currentFrame }
        setFrames= { setFrames }
        drawing={ drawing }
        setDrawing={ setDrawing } />
      <Toolbox 
        currentFrame={ currentFrame }
        setCurrentFrame={ setCurrentFrame }
        frames={ frames }
        setFrames={ setFrames }
        numberOfFrames={ numberOfFrames }
        setNumberOfFrames={ setNumberOfFrames } />
    </div>
  );
}

export default App;
