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
  hasWallet?: boolean;
  globalContext?: any;
  reactSession?: any;
}

const Header: React.FC<HeaderProps> = ({
  onChangeColorTheme,
  hasWallet = false,
  globalContext,
  reactSession,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          // @ts-ignore
          color="white"
        >
          <Container>
            <Toolbar
              disableGutters={true}
              sx={{
                button: {
                  marginLeft: "20px",
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }} textAlign="left">
                <Logo />
              </Box>
              <Box>
                <Button
                  // @ts-ignore
                  color="secondary"
                  variant="contained"
                  onClick={onChangeColorTheme}
                >
                  {theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
                </Button>
              </Box>
              <Box>
                <MuiLink href="https://onxrp.com/">
                  <Button color="primary" variant="contained">
                    Home
                  </Button>
                </MuiLink>
              </Box>
              {hasWallet && globalContext && reactSession && (
                <Box>
                  <ConnectButton
                    globalContext={globalContext}
                    reactSession={reactSession}
                  />
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
