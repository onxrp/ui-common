import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ThemeProvider, Theme } from "@mui/material/styles";

import Logo from "./Logo";
import ConnectButton from "./ConnectButton";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  onChangeColorTheme: () => void;
  hasWallet?: boolean;
  globalContext?: any;
  reactSession?: any;
  theme: Theme;
}

const Header: React.FC<HeaderProps> = ({
  onChangeColorTheme,
  hasWallet = false,
  globalContext,
  reactSession,
  theme,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            // @ts-ignore
            color="white"
            classNames="header"
          >
            <Container className="page">
              <Toolbar
                disableGutters={true}
                sx={{
                  button: {
                    marginLeft: { xs: "5px", md: "20px" },
                  },
                }}
              >
                <Box sx={{ flexGrow: 1 }} textAlign="left" zIndex={"1001"}>
                  <Logo />
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                      color="secondary"
                      variant="contained"
                      onClick={onChangeColorTheme}
                    >
                      {theme.palette.mode === "dark"
                        ? "Light mode"
                        : "Dark mode"}
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <MobileMenu>
                    <Grid container justifyContent={"center"} maxWidth="512px">
                      <Grid item xs={12} justifyContent={"center"} mb={2}>
                        {hasWallet && globalContext && reactSession && (
                          <ConnectButton
                            globalContext={globalContext}
                            reactSession={reactSession}
                          />
                        )}
                      </Grid>
                      <Grid item xs={12} justifyContent={"center"}>
                        <Button
                          color="secondary"
                          variant="contained"
                          onClick={onChangeColorTheme}
                        >
                          {theme.palette.mode === "dark"
                            ? "Light mode"
                            : "Dark mode"}
                        </Button>
                      </Grid>
                    </Grid>
                  </MobileMenu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Header;
