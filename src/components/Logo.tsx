import React from "react"
import { useTheme, Link } from '@mui/material'
import LogoLightSrc from '../assets/images/logo_light.svg';
import LogoDarkSrc from '../assets/images/logo_light.svg';

const Footer: React.FC<any> = () => {
	const theme = useTheme()

	return (
		<>
			<Link href="https://onxrp.com/" target="_blank" rel="noopener noreferrer" sx={{ flex: '0 0 150px' }}>
				<img
					src={theme.palette.mode === 'dark' ? LogoDarkSrc : LogoLightSrc}
					style={{ maxHeight: '75px' }}
					alt="onXRP"
				/>
			</Link>
		</>
	)
}

export default Footer;
