import React from "react";
import { Box, Typography, Grid, Container, Link as MuiLink } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function Footer() {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			Box,
			{ sx: { flexGrow: 1 }, borderTop: '4px solid #a100b9', pt: 3 },
			React.createElement(
				Container,
				null,
				React.createElement(
					Box,
					{
						sx: { flexGrow: 1 },
						justifyContent: { md: 'flex-start', xs: 'center' },
						py: 2,
						display: 'flex',
						alignItems: 'center' },
					React.createElement(
						MuiLink,
						{ href: 'https://onxrp.com/', target: '_blank' },
						React.createElement('img', {
							src: '/assets/images/logo.png',
							style: { maxWidth: '150px' },
							alt: 'onXRP DEX'
						})
					),
					React.createElement(
						Typography,
						{
							sx: {
								fontWeight: 'lighter',
								marginLeft: '0.7rem'
							} },
						'powered by',
						' ',
						React.createElement(
							MuiLink,
							{
								href: 'https://xpunks.club/',
								target: '_blank' },
							React.createElement(
								'span',
								{
									style: {
										color: '#a100b9',
										fontWeight: 'bold'
									} },
								'X'
							),
							React.createElement(
								'span',
								{ style: { fontWeight: 'bold' } },
								'PUNK'
							),
							's'
						)
					)
				)
			)
		),
		React.createElement(
			Box,
			{ pb: 4 },
			React.createElement(
				Container,
				null,
				React.createElement(Box, {
					mt: 3,
					mb: 5,
					height: '1px',
					width: '100%',
					style: { backgroundColor: '#d1d1d1' }
				}),
				React.createElement(
					Grid,
					{ container: true },
					React.createElement(
						Grid,
						{
							item: true,
							md: 4,
							xs: 12,
							sx: { textAlign: { md: 'left', xs: 'center' } } },
						React.createElement(
							Box,
							{ mb: { md: 2.6, xs: 1 } },
							React.createElement(
								MuiLink,
								{ align: 'left', href: 'https://onxrp.com/' },
								'Home'
							)
						),
						React.createElement(
							Box,
							{ mb: 1.5 },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									target: '_blank',
									href: 'https://onxrp.com/education/',
									style: { fontWeight: '400' } },
								'Education'
							)
						),
						React.createElement(
							Box,
							{ mb: 1.5 },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									target: '_blank',
									href: 'https://onxrp.com/education/xrpl/',
									style: { fontWeight: '400' } },
								'XRPL'
							)
						),
						React.createElement(
							Box,
							{ mb: { md: 1.5, xs: 2.7 } },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									href: 'https://onxrp.com/education/crypto-101/',
									target: '_blank',
									style: { fontWeight: '400' } },
								'Crypto 101'
							)
						)
					),
					React.createElement(
						Grid,
						{
							item: true,
							md: 4,
							xs: 12,
							sx: { textAlign: { md: 'left', xs: 'center' } } },
						React.createElement(
							Box,
							{ mb: { md: 2.6, xs: 1 } },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									href: 'https://onxrp.com/about-us/',
									target: '_blank' },
								'About Us'
							)
						),
						React.createElement(
							Box,
							{ mb: 1.5 },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									href: 'https://onxrp.com/about-us/',
									target: '_blank',
									style: { fontWeight: '400' } },
								'Our Team'
							)
						),
						React.createElement(
							Box,
							{ mb: { md: 1.5, xs: 2.7 } },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									href: 'https://onxrp.com/wp-content/uploads/2022/01/whitepaper.pdf',
									target: '_blank',
									style: { fontWeight: '400' } },
								'White Paper'
							)
						)
					),
					React.createElement(
						Grid,
						{
							item: true,
							md: 4,
							xs: 12,
							sx: { textAlign: { md: 'left', xs: 'center' } } },
						React.createElement(
							Box,
							{ mb: { md: 2.6, xs: 1 } },
							React.createElement(
								MuiLink,
								{ align: 'left', href: '#' },
								'Projects'
							)
						),
						React.createElement(
							Box,
							{ mb: 1.5 },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									href: 'https://onxrp.com/trusted-resources/',
									target: '_blank',
									style: { fontWeight: '400' } },
								'Trusted Resources'
							)
						),
						React.createElement(
							Box,
							{ mb: 1.5 },
							React.createElement(
								MuiLink,
								{
									align: 'left',
									href: 'https://onxrp.com/projects/',
									target: '_blank',
									style: { fontWeight: '400' } },
								'Featured Projects'
							)
						)
					),
					React.createElement(
						Grid,
						{ item: true, xs: 12 },
						React.createElement(
							Box,
							{
								mt: 2,
								display: 'flex',
								flexDirection: { md: 'row', xs: 'column' },
								justifyContent: {
									md: 'space-between',
									xs: 'center'
								},
								alignItems: 'center' },
							React.createElement(
								Box,
								null,
								React.createElement(
									Typography,
									{
										fontWeight: '400',
										textAlign: {
											md: 'left',
											xs: 'center'
										} },
									'Follow Us'
								),
								React.createElement(
									Box,
									{
										display: 'flex',
										justifyContent: {
											md: 'flex-start',
											xs: 'center'
										},
										alignItems: 'center',
										mt: 1 },
									React.createElement(
										MuiLink,
										{
											href: 'https://www.youtube.com/channel/UC9v9WC-CyenpoNE94nYM8KQ',
											rel: 'noreferrer',
											target: '_blank',
											style: { marginRight: '20px' } },
										React.createElement(YouTubeIcon, null)
									),
									React.createElement(
										MuiLink,
										{
											href: 'https://twitter.com/onXRPdotcom',
											rel: 'noreferrer',
											target: '_blank',
											style: { marginRight: '20px' } },
										React.createElement(TwitterIcon, null)
									),
									React.createElement(
										MuiLink,
										{
											href: 'https://www.instagram.com/onxrpdotcom/',
											rel: 'noreferrer',
											target: '_blank',
											style: { marginRight: '20px' } },
										React.createElement(InstagramIcon, null)
									)
								)
							),
							React.createElement(
								Box,
								{ mt: { md: 0, xs: 2 } },
								React.createElement(
									Typography,
									{
										fontWeight: 'lighter',
										textAlign: {
											md: 'right',
											xs: 'center'
										} },
									'onXRP.com \xA9 2022 All Rights Reserved.'
								)
							)
						)
					)
				)
			)
		)
	);
}