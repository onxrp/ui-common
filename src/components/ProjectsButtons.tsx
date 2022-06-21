import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled, Theme } from "@mui/material/styles";

const wrapperSx = (theme: Theme) => ({
  alignContent: "center",
  justifyContent: "space-between",
  backgroundColor: {
    xs: "transparent",
    sm: theme.palette.mode === "dark" ? "rgb(107 107 107 / 50%)" : "#DBD6DF",
  },
  padding: "7px 0px",
  borderRadius: { xs: "50%", md: "24px" },
  "& .MuiGrid-item": {
    padding: { md: "0 10px" },
  },
});

const ButtonStyled = styled(Button)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minWidth: "100px",
  padding: "7px 20px",
  color: theme.palette.mode === "dark" ? "#9C9C9C" : "#393939",
  backgroundColor: theme.palette.mode === "dark" ? "#1D1D1D" : "#C9C2D6",
  fontSize: "0.875rem",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "18vw",
    height: "18vw",
    minWidth: "auto",
    fontSize: "0.75rem",
    borderRadius: "50%",
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#C9C1D6",
  },
  "&:hover, &.active": {
    color: theme.palette.mode === "dark" ? "#000000" : "#480BBD",
    backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF",
  },
  "&.Mui-disabled": {
    color: theme.palette.mode === "dark" ? "#2C2C2C" : "#B2AFC5",
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#E5E1EC",
  },
}));

type ProjectsButtonLinkKeyType = "dex" | "swap" | "bridge" | "onRamp";

type ProjectsButtonLinkType =
  Record<ProjectsButtonLinkKeyType, {
    key: ProjectsButtonLinkKeyType,
    url: string,
    target?: "_self" | "_blank" | "_parent" | "_top"
  }>

const links: ProjectsButtonLinkType = {
  dex: { key: "dex", url: "https://dex.onxrp.com/", target: "_self" },
  swap: { key: "swap", url: "https://dex.onxrp.com/swap", target: "_self" },
  bridge: { key: "bridge", url: "https://bridge.onxrp.com", target: "_self" },
  onRamp: { key: "onRamp", url: "https://dex.onxrp.com/onRamp", target: "_self" },
};

interface IProjectsButtonsProps {
  activeLink: ProjectsButtonLinkKeyType;
  disabledLink?: ProjectsButtonLinkKeyType[];
}

const ProjectsButtons: React.FC<IProjectsButtonsProps> = ({ activeLink, disabledLink }) => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        container
        item
        xs={12}
        md={"auto"}
        textAlign={"left"}
        sx={wrapperSx}
      >
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.dex.url}
            className={activeLink === links.dex.key ? "active" : ""}
            disabled={disabledLink?.includes(links.dex.key)}
          >
            Dex
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.swap.url}
            className={activeLink === links.swap.key ? "active" : ""}
            disabled={disabledLink?.includes(links.swap.key)}
          >
            Swap
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.bridge.url}
            className={activeLink === links.bridge.key ? "active" : ""}
            disabled={disabledLink?.includes(links.bridge.key)}
          >
            Bridge
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.onRamp.url}
            className={activeLink === links.onRamp.key ? "active" : ""}
            disabled={disabledLink?.includes(links.onRamp.key)}
          >
            Fiat on-ramp
          </ButtonStyled>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsButtons;
