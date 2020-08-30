import React from "react"
import ColorButton from "./ColorButton"

export default function Palette(props) {

	const colors =[
		"#FF0000",
		"#00FF00",
		"#0000FF",
		"#FFFF00",
		"#FF00FF",
		"#00FFFF",
		"#FFFFFF",
		"#000000",
		"#FFAA00",
		"#AA00FF",
		"#FF88AA",
		]

	const colorButtons = colors.map( color => {
		return <ColorButton 
					color={ color }
					selected={ props.drawColor === color }
					setDrawColor={ props.setDrawColor } />
	})

	return (
		<React.Fragment>
			{ colorButtons }
		</React.Fragment>
	)
}