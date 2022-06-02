import React, { useState } from "react";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

const navWrapperSx = (theme: any, isShow: boolean) => ({
  position: "fixed",
  top: "-1%",
  left: 0,
  margin: 0,
  zIndex: 1000,
  width: "100%",
  height: "512px",
  maxHeight: "80%",
  paddingTop: "110px",
  background: theme.palette.background.body,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderBottomRightRadius: "32px",
  borderBottomLeftRadius: "32px",
  transition: "all .6s cubic-bezier(.4,0,.2,1)",
  transform: isShow ? "translateY(0px)" : "translateY(-520px)",
});

const overlaySx = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "background.menuOverlay",
  zIndex: "999",
  opacity: "0.9",
  transition: "all .3s ease-in-out",
};

const buttonWrapperSx = {
  width: "100%",
  position: "absolute",
  bottom: 10,
  justifyContent: "center",
};

const buttonStyle = {
  width: 48,
  height: 4,
  backgroundColor: "#d8d8d8",
  border: 0,
  borderRadius: 4,
};

const MobileMenu: React.FC<any> = ({ children }) => {
  const theme = useTheme();
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Box className="mobileMenu" justifyContent={"center"}>
      <Box display={"flex"}>
        <img
          src={
            theme.palette.mode === "dark"
              ? "/assets/images/icon-hamburger-dark.svg"
              : "/assets/images/icon-hamburger.svg"
          }
          style={{ height: "14", width: "16", cursor: "pointer" }}
          alt="menu"
          onClick={() => setIsShow((state) => !state)}
        />
      </Box>
      <Box sx={(theme) => navWrapperSx(theme, isShow)}>
        <Box>{children}</Box>
        <Box sx={buttonWrapperSx} onClick={() => setIsShow(false)}>
          <button style={{ ...buttonStyle }}></button>
        </Box>
      </Box>
      {isShow && <Box sx={overlaySx} onClick={() => setIsShow(false)}></Box>}
    </Box>
  );
};

export default MobileMenu;
