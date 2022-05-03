import React, { useState } from "react"
import { Input, Button, Box, Typography } from '@mui/material';

const inputWrapperSx = {
	position: "relative",
	width: "100%",
}

const inputSx = {
	background: 'transparent',
	border: '1px solid #c2c2c8',
	borderRadius: 24,
	padding: '15px 35% 17px 40px',
	height: 48,
	"& input": {
		fontSize: '0.875rem',
		fontStyle: 'normal',
		fontWeight: 700,
		color: "gray.darker",
		padding: 0,
	}
}

const buttonWrapperSx = {
	position: "absolute",
	top: 0,
	right: 0,
	height: "100%",
	width: { xs: "auto", sm: "35%" },
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: "4px",
} as any;

const buttonSx = {
	width: "100%",
	height: "100%",
	fontSize: '0.75rem',
	lineHeight: 16,
	letterSpacing: { xs: 1, md: 2 }
}


interface SubscribeInputProps {
	onSubscribe?: (email: string) => string | null;
}

const SubscribeInput: React.FC<SubscribeInputProps> = ({ onSubscribe }) => {
	const [value, setValue] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(null);

	const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setValue(e.target?.value);
	}

	const handleSubscribe = async () => {
		if (!value) {
			setMessage("Please Enter a Email Address");

			return;
		}

		if (typeof onSubscribe === "function") {
			const result = await onSubscribe(value);
			setMessage(!result ? "Thank you!!" : result);
		} else {
			setMessage("Thank you!!");
		}
	}

	return (
		<>
			<Box sx={inputWrapperSx}>
				<Input
					type="text"
					name="email"
					placeholder="Enter your mail to join our mailing list"
					disableUnderline
					fullWidth
					sx={inputSx}
					onChange={onChangeInput}
					value={value}
				/>
				<Box sx={buttonWrapperSx}>
					<Button
						component="span"
						sx={buttonSx}
						onClick={handleSubscribe}
					>
						<Box component="span" sx={{ display: { xs: "none", sm: "block" } }}>Yes, Please</Box> {">"}
					</Button>
				</Box>
			</Box>
			<Box mt={1} pl={"40px"} textAlign="left">
				<Typography sx={{
					fontSize: '0.875rem',
					fontWeight: 700,
					lineHeight: '1rem',
				}}>
					{message ?
						message === "Thank you!!"
							? message
							: <Box component="span" color="#b80058" fontWeight="400">{message}</Box>
						: null
					}
				</Typography>
			</Box>
		</>
	)
}

export default SubscribeInput;