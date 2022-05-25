import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Logo from "./Logo";
import ConnectButton from "./ConnectButton";

interface HeaderProps {
  onChangeColorTheme: () => void;
  hasWallet?: boolean;
  globalContext?: any;
  reactSession?: any;
}

const darkSx = (theme: any) => ({
  display: theme.palette.mode === "dark" ? "block" : "none",
});

const lightSx = (theme: any) => ({
  display: theme.palette.mode !== "dark" ? "block" : "none",
});

const Header: React.FC<HeaderProps> = ({
  onChangeColorTheme,
  hasWallet = false,
  globalContext,
  reactSession,
}) => {
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
                  marginLeft: { xs: "5px", md: "20px" },
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }} textAlign="left">
                <Logo />
              </Box>
              {hasWallet && globalContext && reactSession && (
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    order: { xs: 2, md: 0 },
                  }}
                >
                  <ConnectButton
                    globalContext={globalContext}
                    reactSession={reactSession}
                  />
                </Box>
              )}
              <Box>
                <Button
                  // @ts-ignore
                  color="secondary"
                  variant="contained"
                  onClick={onChangeColorTheme}
                >
                  <Box sx={darkSx}>
                    Light{" "}
                    <Box
                      component={"span"}
                      sx={{ display: { xs: "none", sm: "inline-block" } }}
                    >
                      mode
                    </Box>
                  </Box>
                  <Box sx={lightSx}>
                    Dark{" "}
                    <Box
                      component={"span"}
                      sx={{ display: { xs: "none", sm: "inline-block" } }}
                    >
                      mode
                    </Box>
                  </Box>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
