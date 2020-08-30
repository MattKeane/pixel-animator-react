import React from "react"

export default function ColorButton(props) {

	const buttonStyle = {backgroundColor: props.color}
	
	return (
		<div className="colorButton">
			<div style={ buttonStyle } />
		</div>)
}