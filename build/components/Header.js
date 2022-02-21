import React from "react";
import { Box, AppBar, Toolbar, useTheme, Container, Link as MuiLink, Button } from '@mui/material';

export default function Header() {
	var theme = useTheme();
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			Box,
			{ sx: { flexGrow: 1 }, borderBottom: "4px solid #a100b9" },
			React.createElement(
				AppBar,
				{ position: "static", color: "white" },
				React.createElement(
					Container,
					null,
					React.createElement(
						Toolbar,
						{ disableGutters: true },
						React.createElement(
							Box,
							{ sx: { flexGrow: 1 }, textAlign: "left" },
							React.createElement(
								MuiLink,
								{ href: "https://onxrp.com/" },
								React.createElement("img", {
									src: "/assets/images/logo.png",
									style: { maxWidth: '150px' },
									alt: "onXRP"
								})
							)
						),
						React.createElement(
							Box,
							null,
							React.createElement(
								MuiLink,
								{ href: "https://onxrp.com/" },
								React.createElement(
									Button,
									{ color: "primary", variant: "contained" },
									"Back to Home"
								)
							)
						)
					)
				)
			)
		)
	);
}