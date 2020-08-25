import React, { useRef, useEffect } from "react"

export default function Canvas() {

	const canvas = useRef(null)

	useEffect( () => {
		const ctx = canvas.current.getContext("2d")
		ctx.beginPath()
		ctx.rect(10, 10, 10, 10)
		ctx.fillStyle = "#000"
		ctx.fill()
	})

	return (
		<canvas 
			height="200px" 
			width="200px"
			ref={ canvas } />
	)
}