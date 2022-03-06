import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  useTheme,
  Container,
  Link as MuiLink,
  Button,
} from "@mui/material";

import Logo from "./Logo";
import ConnectButton from "./ConnectButton";

interface HeaderProps {
  onChangeColorTheme: () => void;
  hasWallet: boolean;
}

const Header: React.FC<HeaderProps> = ({ onChangeColorTheme, hasWallet = false }) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1 }} borderBottom={`4px solid #a100b9`}>
        <AppBar
          position="static"
          // @ts-ignore
          color="white"
        >
          <Container>
            <Toolbar disableGutters={true}>
              <Box sx={{ flexGrow: 1 }} textAlign="left">
                <Logo />
              </Box>
              <Box>
                <Button
                  // @ts-ignore
                  color="button"
                  variant="contained"
                  sx={{ marginRight: "20px" }}
                  onClick={onChangeColorTheme}
                >
                  {theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
                </Button>
              </Box>
              <Box>
                <MuiLink href="https://onxrp.com/">
                  <Button color="primary" variant="contained">
                    Back to Home
                  </Button>
                </MuiLink>
              </Box>
			  {hasWallet &&
				<Box>
					<ConnectButton />
				</Box>
			  }
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
