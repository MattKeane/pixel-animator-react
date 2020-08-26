import React from "react"
import { Button, Input, Label } from "semantic-ui-react"

export default function Toolbox(props) {

	function switchToPrevious() {
		if (props.currentFrame > 0) {
			props.setCurrentFrame(props.currentFrame - 1)
		}
	}

	function switchToNext() {
		if (props.currentFrame < 63) {
			props.setCurrentFrame(props.currentFrame + 1)
		}
	}

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
		} else if (e.target.value < 1) {
			props.setNumberOfFrames(1) 
		} else {
			props.setNumberOfFrames(64)
		}
	}

	return (
		<React.Fragment>
			<div className="toolContainer">
				<Label basic>
					Current Frame
				</Label>
				{
					props.currentFrame === 0
					?
					<Button 
						icon="angle left"
						disabled />
					:
					<Button 
						icon="angle left"
						onClick={ switchToPrevious } />
				}				
				<Input 
					className="frameInput"
					value={ props.currentFrame + 1}
					onChange={ changeCurrentFrame } />
				{
					props.currentFrame >= props.numberOfFrames - 1
					?
					<Button 
						icon="angle right"
						disabled />
					:
					<Button 
						icon="angle right"
						onClick={ switchToNext } />
				}				
			</div>
			<div className="toolContainer">
				<Label basic>
					Number of Frames
				</Label>
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
		</React.Fragment>
	)
}