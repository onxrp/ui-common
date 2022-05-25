import React from "react";
import Link from "@mui/material/Link";
import useTheme from "@mui/material/styles/useTheme";

import { ReactComponent as LogoLightModeIcon } from "../assets/images/logo_light_mode.svg";
import { ReactComponent as LogoDarkModeIcon } from "../assets/images/logo_dark_mode.svg";

const link = {
  flex: "0 0 150px",
  maxHeight: "75px",
  width: "100%",
  maxWidth: "150px",
  "& svg": {
    width: "100%",
    maxWidth: "150px",
    maxHeight: "75px",
  },
};

const Logo: React.FC<any> = () => {
  const theme = useTheme();

  return (
    <>
      <Link
        href="https://onxrp.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={link}
      >
        {theme.palette.mode === "dark" ? (
          <LogoDarkModeIcon />
        ) : (
          <LogoLightModeIcon />
        )}
      </Link>
    </>
  );
};

export default Logo;
