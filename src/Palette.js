import React from "react"

export default function Palette(props) {
	return (
		<React.Fragment>
			<input 
				type="color"
				value={ props.drawColor }
				onChange={ e => props.setDrawColor(e.target.value) } />
		</React.Fragment>
	)
}