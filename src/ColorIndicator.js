import React from "react"

export default function ColorIndicator(props) {
	return (
		<div onClick={props.onClick} className="colorIndicator">
			<div style={{backgroundColor: props.drawColor}} />
		</div>
	)
}