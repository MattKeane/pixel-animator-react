import React, { useRef, useEffect, useState } from "react"
import { Button } from "semantic-ui-react"

export default function Canvas(props) {

	const [mode, setMode] = useState("draw")

	const canvas = useRef(null)

	function switchToPrevious() {
		if (props.currentFrame > 0) {
			props.setCurrentFrame(props.currentFrame - 1)
		}
	}

	function switchToNext() {
		if (props.currentFrame < props.numberOfFrames - 1) {
			props.setCurrentFrame(props.currentFrame + 1)
		}
	}

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
			if (mode === "draw") {
				newFrames[props.currentFrame][y][x] = true
			} else {
				newFrames[props.currentFrame][y][x] = false
			}
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
		<div className="canvasContainer">
			{
				props.currentFrame > 0
				?
				<Button 
					icon="angle left"
					onClick={ switchToPrevious } />
				:
				<Button 
					icon="angle left"
					disabled />				
			}
			<canvas 
				height="200px" 
				width="200px"
				ref={ canvas }
				onMouseDown={ handleMouseDown }
				onMouseMove={ handleMouseMove } />
			{
				props.currentFrame < props.numberOfFrames - 1
				?
				<Button 
					icon="angle right"
					onClick={ switchToNext } />
				:
				<Button 
					icon="angle right"
					disabled />				
			}
			<Button.Group vertical>
				{
					mode === "draw"
					?
					<React.Fragment>
						<Button
							icon="pencil"
							disabled />
						<Button
							icon="eraser"
							onClick={ e => setMode("erase") } />
					</React.Fragment>
					:
					<React.Fragment>
						<Button
							icon="pencil"
							onClick={ e => setMode("draw") } />
						<Button
							icon="eraser"
							disabled />
					</React.Fragment>
				}
			</Button.Group>
		</div>
	)
}