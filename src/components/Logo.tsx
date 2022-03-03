import React from "react"
import { useTheme, Link } from '@mui/material'
import LogoLightModeSrc from '../assets/images/logo_light_mode.svg';
import LogoDarkModeSrc from '../assets/images/logo_dark_mode.svg';

const Logo: React.FC<any> = () => {
	const theme = useTheme()

	return (
		<>
			<Link href="https://onxrp.com/" target="_blank" rel="noopener noreferrer" sx={{ flex: '0 0 150px' }}>
				<img
					src={theme.palette.mode === 'dark' ? LogoDarkModeSrc : LogoLightModeSrc}
					style={{ maxHeight: '75px', maxWidth: '150px' }}
					alt="onXRP"
				/>
			</Link>
		</>
	)
}

export default Logo;