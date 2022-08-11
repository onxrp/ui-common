import React, { useMemo } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled, Theme } from "@mui/material/styles";

const wrapperSx = (theme: Theme) => ({
  alignContent: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.mode === "dark" ? "rgb(107 107 107 / 50%)" : "#DBD6DF",
  padding: { xs: "5px", md: "7px 0" },
  borderRadius: "24px",
  "& .MuiGrid-item": {
    padding: { xs: "0", md: "0 10px" },
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
    width: "15vw",
    height: "12vw",
    minWidth: "auto",
    fontSize: "0.625rem",
    padding: "0",
    borderRadius: "24px",
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

type ProjectsButtonLinkKeyType = "dex" | "swap" | "bridge" | "onRamp" | "deFi";

type ProjectsButtonLinkType = Record<
  ProjectsButtonLinkKeyType,
  {
    key: ProjectsButtonLinkKeyType;
    url: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
  }
>;

const links: ProjectsButtonLinkType = {
  dex: { key: "dex", url: "https://dex.onxrp.com/", target: "_self" },
  swap: { key: "swap", url: "https://dex.onxrp.com/swap", target: "_self" },
  bridge: { key: "bridge", url: "https://bridge.onxrp.com", target: "_self" },
  onRamp: { key: "onRamp", url: "https://dex.onxrp.com/onRamp", target: "_self" },
  deFi: { key: "deFi", url: "https://onavax.com", target: "_blank" },
};

interface IProjectsButtonsProps {
  activeLink: ProjectsButtonLinkKeyType;
  disabledLink?: ProjectsButtonLinkKeyType[];
  theme?: Theme;
}

const ProjectsButtons: React.FC<IProjectsButtonsProps> = ({ activeLink, disabledLink, theme }) => {
  const mode = useMemo<"dark" | "light">(() => {
    return theme?.palette?.mode === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <Grid container justifyContent={"center"}>
      <Grid container item xs={12} md={"auto"} textAlign={"left"} sx={wrapperSx}>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.dex.url + "?mode=" + mode}
            className={activeLink === links.dex.key ? "active" : ""}
            disabled={disabledLink?.includes(links.dex.key)}
          >
            Dex
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.swap.url + "?mode=" + mode}
            className={activeLink === links.swap.key ? "active" : ""}
            disabled={disabledLink?.includes(links.swap.key)}
          >
            Swap
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.bridge.url + "?mode=" + mode}
            className={activeLink === links.bridge.key ? "active" : ""}
            disabled={disabledLink?.includes(links.bridge.key)}
          >
            Bridge
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.deFi.url + "?mode=" + mode}
            className={activeLink === links.deFi.key ? "active" : ""}
            disabled={disabledLink?.includes(links.deFi.key)}
          >
            DEFI
          </ButtonStyled>
        </Grid>
        <Grid item xs={"auto"}>
          <ButtonStyled
            href={links.onRamp.url + "?mode=" + mode}
            className={activeLink === links.onRamp.key ? "active" : ""}
            disabled={disabledLink?.includes(links.onRamp.key)}
          >
            Cash
          </ButtonStyled>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsButtons;
