import React, { useRef, useEffect } from "react"

export default function Canvas(props) {

	const canvas = useRef(null)

	function drawFrame() {
		const ctx = canvas.current.getContext("2d")
		ctx.clearRect(0, 0, 200, 200)
		props.frames[props.currentFrame].forEach( (row, i) => {
			row.forEach( (pixel, j) => {
				if (pixel) {
					ctx.beginPath()
					ctx.rect(j * 10, i * 10, 10, 10)
					ctx.fillStyle = "#000"
					ctx.fill()
				}
			})
		})
	}

	function drawOnCanvas(e) {
		const inRange = (e.offsetX >= 0 && e.offsetX < 200) && (e.offsetY >= 0 && e.offsetY < 200)
		if (inRange) {
			const x = Math.floor(e.offsetX / 10)
			const y = Math.floor(e.offsetY / 10)
			const newFrames = JSON.parse(JSON.stringify(props.frames))
			newFrames[props.currentFrame][y][x] = true
			props.setFrames(newFrames)
		}
	}

	function handleMouseDown(e) {
		props.setDrawing(true)
		drawOnCanvas(e.nativeEvent)
	}

	function handleMouseMove(e) {
		if (props.drawing) {
			drawOnCanvas(e.nativeEvent)
		}
	}

	useEffect(drawFrame, props.frame)

	return (
		<div>
			<canvas 
				height="200px" 
				width="200px"
				ref={ canvas }
				onMouseDown={ handleMouseDown }
				onMouseMove={ handleMouseMove } />
		</div>
	)
}