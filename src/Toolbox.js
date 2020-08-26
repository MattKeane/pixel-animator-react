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
				<Button
					content="Copy Prev"
					icon="angle left"
					labelPosition="left" />
				<Button
					content="Copy Next"
					icon="angle right"
					labelPosition="right" />
			</div>
		</React.Fragment>
	)
}