import React, { useState } from "react"
import { Button, Input } from "semantic-ui-react"

export default function Toolbox() {

	const [currentFrame, setCurrentFrame] = useState(0)

	function switchToPrevious() {
		if (currentFrame > 0) {
			setCurrentFrame(currentFrame - 1)
		}
	}

	function switchToNext() {
		if (currentFrame < 63) {
			setCurrentFrame(currentFrame + 1)
		}
	}

	function handleChange(e) {
		if (e.target.value >= 1 && e.target.value <= 64) {
			setCurrentFrame(e.target.value - 1)
		}
	}

	return (
		<div>
			<Button 
				icon="angle left"
				onClick={ switchToPrevious } />
			<Input 
				className="numberInput"
				value={ currentFrame + 1}
				onChange={ handleChange } />
			<Button 
				icon="angle right"
				onClick={ switchToNext } />
		</div>
	)
}