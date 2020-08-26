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

	function handleChange(e) {
		if (e.target.value >= 1 && e.target.value <= 64) {
			props.setCurrentFrame(e.target.value - 1)
		}
	}

	function copyPrev() {
		const newFrames = JSON.parse(JSON.stringify(props.frames))
		newFrames[props.currentFrame] = props.frames[props.currentFrame - 1]
		props.setFrames(newFrames)
	}

	return (
		<React.Fragment>
			<div className="toolContainer">
				<Label basic>
					Current Frame
				</Label>
				<Button 
					icon="angle left"
					onClick={ switchToPrevious } />
				<Input 
					className="numberInput"
					value={ props.currentFrame + 1}
					onChange={ handleChange } />
				<Button 
					icon="angle right"
					onClick={ switchToNext } />
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
						onClick={copyPrev} />
				}
				{
					props.currentFrame === 63
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
						labelPosition="right" />
				}				
			</div>
		</React.Fragment>
	)
}