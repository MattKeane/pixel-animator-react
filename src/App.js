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
  const [drawColor, setDrawColor] = useState("#000000")

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

  // function to fetch GIF from backend
  async function getGif() {
    try {
      const url = "/images/"
      const payload = JSON.stringify({
        "delay": +animationDelay,
        "frames": frames.slice(0, numberOfFrames),
        "pixelSize": 10,
        "width": 200,
        "height": 200
      })
      const gifResponse = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: payload,
        headers: {
          "Content-Type": "application/json"
        }
      })
      const gifJson = await gifResponse.json()
      console.log(gifJson)
      if (gifJson.status === 200) {
        window.open(`${process.env.REACT_APP_API_URL}/images/${gifJson.data.image_uuid}`, "_blank")
      }
    } catch (err) {
      console.log(err)
    }
  }

  // this effect controls the canvas animation
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
      <header>
        <h1>Pixel Wizard</h1>
      </header>
      <div className="main">
          <Canvas
            frames={ frames }
            currentFrame={ currentFrame }
            setFrames= { setFrames }
            drawing={ drawing }
            setDrawing={ setDrawing }
            setCurrentFrame={ setCurrentFrame }
            numberOfFrames={ numberOfFrames }
            drawColor={ drawColor }
            setDrawColor={ setDrawColor } />
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
            setAnimationDelay={ setAnimationDelay }
            getGif={ getGif } />
      </div>
    </div>
  );
}

export default App;
