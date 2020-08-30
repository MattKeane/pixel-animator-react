import React from "react"
import ColorButton from "./ColorButton"

export default function Palette(props) {
	return (
		<React.Fragment>
			<input 
				type="color"
				value={ props.drawColor }
				onChange={ e => props.setDrawColor(e.target.value) } />
			<ColorButton />
		</React.Fragment>
	)
}