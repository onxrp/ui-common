import React from 'react'
import {
	Box,
	Typography,
	Grid,
	Container,
	Link as MuiLink,
} from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import Logo from "./Logo";

const Footer: React.FC<any> = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }} borderTop={`4px solid #a100b9`} pt={3}>
				<Container>
					<Box
						sx={{ flexGrow: 1 }}
						justifyContent={{ md: 'flex-start', xs: 'center' }}
						py={2}
						display="flex"
						alignItems="center">
						<Logo />
						<Typography
							sx={{
								fontWeight: 'lighter',
								marginLeft: '0.7rem',
							}}>
							powered by{' '}
							<MuiLink
								href="https://xpunks.club/"
								target="_blank">
								<span
									style={{
										color: '#a100b9',
										fontWeight: 'bold',
									}}>
									X
								</span>
								<span style={{ fontWeight: 'bold' }}>PUNK</span>
								s
							</MuiLink>
						</Typography>
					</Box>
				</Container>
			</Box>
			<Box pb={4}>
				<Container>
					<Box
						mt={3}
						mb={5}
						height="1px"
						width="100%"
						style={{ backgroundColor: '#d1d1d1' }}
					/>
					<Grid container>
						<Grid
							item
							md={4}
							xs={12}
							sx={{ textAlign: { md: 'left', xs: 'center' } }}>
							<Box mb={{ md: 2.6, xs: 1 }}>
								<MuiLink align="left" href="https://onxrp.com/">
									Home
								</MuiLink>
							</Box>

							<Box mb={1.5}>
								<MuiLink
									align="left"
									target="_blank"
									href="https://onxrp.com/education/"
									style={{ fontWeight: '400' }}>
									Education
								</MuiLink>
							</Box>
							<Box mb={1.5}>
								<MuiLink
									align="left"
									target="_blank"
									href="https://onxrp.com/education/xrpl/"
									style={{ fontWeight: '400' }}>
									XRPL
								</MuiLink>
							</Box>
							<Box mb={{ md: 1.5, xs: 2.7 }}>
								<MuiLink
									align="left"
									href="https://onxrp.com/education/crypto-101/"
									target="_blank"
									style={{ fontWeight: '400' }}>
									Crypto 101
								</MuiLink>
							</Box>
						</Grid>

						<Grid
							item
							md={4}
							xs={12}
							sx={{ textAlign: { md: 'left', xs: 'center' } }}>
							<Box mb={{ md: 2.6, xs: 1 }}>
								<MuiLink
									align="left"
									href="https://onxrp.com/about-us/"
									target="_blank">
									About Us
								</MuiLink>
							</Box>

							<Box mb={1.5}>
								<MuiLink
									align="left"
									href="https://onxrp.com/about-us/"
									target="_blank"
									style={{ fontWeight: '400' }}>
									Our Team
								</MuiLink>
							</Box>
							<Box mb={{ md: 1.5, xs: 2.7 }}>
								<MuiLink
									align="left"
									href="https://onxrp.com/wp-content/uploads/2022/01/whitepaper.pdf"
									target="_blank"
									style={{ fontWeight: '400' }}>
									White Paper
								</MuiLink>
							</Box>
						</Grid>

						<Grid
							item
							md={4}
							xs={12}
							sx={{ textAlign: { md: 'left', xs: 'center' } }}>
							<Box mb={{ md: 2.6, xs: 1 }}>
								<MuiLink align="left" href="#">
									Projects
								</MuiLink>
							</Box>

							<Box mb={1.5}>
								<MuiLink
									align="left"
									href="https://onxrp.com/trusted-resources/"
									target="_blank"
									style={{ fontWeight: '400' }}>
									Trusted Resources
								</MuiLink>
							</Box>
							<Box mb={1.5}>
								<MuiLink
									align="left"
									href="https://onxrp.com/projects/"
									target="_blank"
									style={{ fontWeight: '400' }}>
									Featured Projects
								</MuiLink>
							</Box>
						</Grid>

						<Grid item xs={12}>
							<Box
								mt={2}
								display="flex"
								flexDirection={{ md: 'row', xs: 'column' }}
								justifyContent={{
									md: 'space-between',
									xs: 'center',
								}}
								alignItems="center">
								<Box>
									<Typography
										fontWeight="400"
										textAlign={{
											md: 'left',
											xs: 'center',
										}}>
										Follow Us
									</Typography>
									<Box
										display="flex"
										justifyContent={{
											md: 'flex-start',
											xs: 'center',
										}}
										alignItems="center"
										mt={1}>
										<MuiLink
											href="https://www.youtube.com/channel/UC9v9WC-CyenpoNE94nYM8KQ"
											rel="noreferrer"
											target="_blank"
											style={{ marginRight: '20px' }}>
											<YouTubeIcon />
										</MuiLink>
										<MuiLink
											href="https://twitter.com/onXRPdotcom"
											rel="noreferrer"
											target="_blank"
											style={{ marginRight: '20px' }}>
											<TwitterIcon />
										</MuiLink>
										<MuiLink
											href="https://www.instagram.com/onxrpdotcom/"
											rel="noreferrer"
											target="_blank"
											style={{ marginRight: '20px' }}>
											<InstagramIcon />
										</MuiLink>
									</Box>
								</Box>
								<Box mt={{ md: 0, xs: 2 }}>
									<Typography
										fontWeight="lighter"
										textAlign={{
											md: 'right',
											xs: 'center',
										}}>
										onXRP.com © 2022 All Rights Reserved.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	)
}

export default Footer;
