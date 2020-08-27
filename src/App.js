import React, { useState, useEffect } from 'react';
import './App.css';
import Canvas from "./Canvas"
import Toolbox from "./Toolbox"

function App() {

  const [frames, setFrames] = useState(createFrames(20, 20))
  const [drawing, setDrawing] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [numberOfFrames, setNumberOfFrames] = useState(64)
  const [animating, setAnimating] = useState(false)
  const [animationDelay, setAnimationDelay] = useState(500)

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

  useEffect(() => {
    function tick() {
      if (currentFrame < numberOfFrames - 1) {
        setCurrentFrame(currentFrame + 1)
      } else {
        setCurrentFrame(0)
      }
    }
    let interval = null
    if (animating) {
      interval = setInterval(tick, animationDelay)
    }
    return () => clearInterval(interval)
  }, [animating, currentFrame, animationDelay, numberOfFrames])

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
        setNumberOfFrames={ setNumberOfFrames } 
        animating={ animating }
        setAnimating={ setAnimating }
        animationDelay={ animationDelay }
        setAnimationDelay={ setAnimationDelay } />
    </div>
  );
}

export default App;
