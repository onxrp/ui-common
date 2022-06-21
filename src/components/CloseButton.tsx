import React from "react";
import Box from "@mui/material/Box";

import { ReactComponent as CloseIcon } from "../assets/images/close.svg";

const CloseButton: React.FC<any> = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          width: "16px",
          height: "16px",
          "& svg": {
            maxWidth: "100%",
            maxHeight: "100%"
          }
        }}
        {...props}
      >
        <CloseIcon />
      </Box>
    </>

  );
};

export default CloseButton;
