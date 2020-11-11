import React, { useState } from "react"
import { Button, Modal } from "semantic-ui-react"
import ColorIndicator from "./ColorIndicator"

export default function PaletteModal(props) {
	const [open, setOpen] = useState(false)

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<ColorIndicator 
				drawColor={props.drawColor}
				onClick={e => setOpen(true)} 
			/>}
		>
			This is the modal
			<Button onClick={() => setOpen(false)}>
				Close
			</Button>
		</Modal>
	)
}