import React from "react"
import { Button, Input, Label } from "semantic-ui-react"

export default function Toolbox(props) {

	function changeCurrentFrame(e) {
		if (e.target.value >= 1 && e.target.value <= props.numberOfFrames) {
			props.setCurrentFrame(e.target.value - 1)
		} else if (e.target.value < 1) {
			props.setCurrentFrame(1)
		} else if (e.target.value > props.numberOfFrames) {
			props.setCurrentFrame(props.numberOfFrames - 1)
		}
	}

	function copyPrev() {
		const newFrames = JSON.parse(JSON.stringify(props.frames))
		newFrames[props.currentFrame] = props.frames[props.currentFrame - 1]
		props.setFrames(newFrames)
	}

	function copyNext() {
		const newFrames = JSON.parse(JSON.stringify(props.frames))
		newFrames[props.currentFrame] = props.frames[props.currentFrame + 1]
		props.setFrames(newFrames)
	}

	function changeNumberOfFrames(e) {
		if (e.target.value >= 1 && e.target.value <= 64) {
			props.setNumberOfFrames(e.target.value)
			if (props.currentFrame + 1 > e.target.value) {
				props.setCurrentFrame(e.target.value - 1)
			}
		} else if (e.target.value < 1) {
			props.setNumberOfFrames(1) 
		} else {
			props.setNumberOfFrames(64)
		}
	}

	function changeAnimationDelay(e) {
		if (e.target.value < 1) {
			props.setAnimationDelay(1)
		} else {
			props.setAnimationDelay(e.target.value)
		}
	}

	return (
		<React.Fragment>
			<div className="toolContainer">
				<Label>Current Frame:</Label>
				<Input 
					className="numberInput"
					type="number"
					value={ props.currentFrame + 1}
					onChange={ changeCurrentFrame } />
					<Label>Number of Frames:</Label>			
				<Input
					className="numberInput"
					type="number"
					value={ props.numberOfFrames }
					onChange={ changeNumberOfFrames } />
			</div>
			<div className="toolContainer">
				{
					props.currentFrame === 0
					?
					<Button
						content="Copy Prev"
						icon="angle left"
						labelPosition="left"
						disabled />
					:
					<Button
						content="Copy Prev"
						icon="angle left"
						labelPosition="left"
						onClick={ copyPrev } />
				}
				{
					props.currentFrame >= props.numberOfFrames - 1
					?
					<Button
						content="Copy Next"
						icon="angle right"
						labelPosition="right" 
						disabled />
					:
					<Button
						content="Copy Next"
						icon="angle right"
						labelPosition="right"
						onClick={ copyNext } />
				}				
			</div>
			<div className="toolContainer">
				<Label basic>
					Animation Delay
				</Label>
				<Input
					className="delayInput"
					type="number"
					value={ props.animationDelay }
					onChange={ changeAnimationDelay } />
				{
					props.animating
					?
					<Button
						content="Animate"
						icon="play"
						disabled />
					:
					<Button
						content="Animate"
						icon="play"
						onClick={ e => props.setAnimating(true) } />
				}
				{
					props.animating
					?
					<Button
						content="Stop"
						icon="stop"
						onClick={ e => props.setAnimating(false) } />
					:
					<Button
						content="Stop"
						icon="stop"
						disabled />					
				}
			</div>
			<div className="toolContainer">
				<Button
					content="Download GIF"
					icon="download" />
			</div>
		</React.Fragment>
	)
}