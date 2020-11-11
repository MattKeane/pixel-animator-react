import React, { useState } from "react"
import { Button, Modal } from "semantic-ui-react"
import ColorIndicator from "./ColorIndicator"
import Palette from "./Palette"

export default function PaletteModal(props) {
	const [open, setOpen] = useState(false)

	return (
		<Modal
			size="tiny"
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<ColorIndicator 
				drawColor={props.drawColor}
				onClick={e => setOpen(true)} 
			/>}
		>
			<Modal.Content>
				<Palette
					drawColor={ props.drawColor }
					setDrawColor={ props.setDrawColor } />
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setOpen(false)}>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	)
}