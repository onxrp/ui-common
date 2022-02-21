import React from "react";
import {
	Box,
	AppBar,
	Toolbar,
	useTheme,
	Container,
	Link as MuiLink,
	Button,
} from '@mui/material'

export default function Header () {
	const theme = useTheme()
	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }} borderBottom={`4px solid #a100b9`}>
				<AppBar position="static" color="white">
					<Container>
						<Toolbar disableGutters={true}>
							<Box sx={{ flexGrow: 1 }} textAlign="left">
								<MuiLink href="https://onxrp.com/">
									<img
										src="/assets/images/logo.png"
										style={{ maxWidth: '150px' }}
										alt="onXRP"
									/>
								</MuiLink>
							</Box>
							<Box>
								<MuiLink href="https://onxrp.com/">
									<Button color="primary" variant="contained">
										Back to Home!
									</Button>
								</MuiLink>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
		</React.Fragment>
	)
}
