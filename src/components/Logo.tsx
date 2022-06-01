import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import { ReactComponent as LogoLightModeIcon } from "../assets/images/logo_light_mode.svg";
import { ReactComponent as LogoDarkModeIcon } from "../assets/images/logo_dark_mode.svg";

const link = {
  "& svg": {
    width: "100%",
    maxWidth: { xs: "88px", sm: "124px", md: "157px" },
    maxHeight: "75px",
  },
};

const darkSx = (theme: any) => ({
  display: theme.palette.mode === "dark" ? "flex" : "none",
});

const lightSx = (theme: any) => ({
  display: theme.palette.mode !== "dark" ? "flex" : "none",
});

const Logo: React.FC<any> = () => {
  return (
    <>
      <Link
        href="https://onxrp.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={link}
        className="logo"
      >
        <Box sx={lightSx}>
          <LogoLightModeIcon />
        </Box>
        <Box sx={darkSx}>
          <LogoDarkModeIcon />
        </Box>
      </Link>
    </>
  );
};

export default Logo;
