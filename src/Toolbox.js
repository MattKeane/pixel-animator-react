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
				<Label>
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
		</React.Fragment>
	)
}