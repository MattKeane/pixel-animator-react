import React from "react"

export default function ColorButton(props) {

	const buttonStyle = {backgroundColor: props.color}
	const selectedStyle = props.selected ? {
		border: "1px solid black",
		padding: "3px"} 
		: 
		{}
	
	return (
		<div 
			className="colorButton"
			style={ selectedStyle} >
			<div style={ buttonStyle } />
		</div>)
}