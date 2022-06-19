import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MuiLink from "@mui/material/Link";
import { ThemeProvider, Theme } from "@mui/material/styles";

import { ReactComponent as TwitterIcon } from "../assets/images/twitter-icon.svg";
import { ReactComponent as YouTubeIcon } from "../assets/images/youtube-icon.svg";

import Logo from "./Logo";
import SubscribeInput from "./SubscribeInput";

const footerTop = {
  borderTop: "1px solid",
  borderColor: "border.footer",
  paddingTop: "40px",
};

const footerLinks = {
  maxWidth: "100%",
  "ul li:first-of-type": {
    marginBottom: "1.5rem",
    fontSize: "0.875rem",
  },
  h5: {
    fontSize: "0.875rem",
    fontWeight: "900",
  },
  li: {
    padding: 0,
    marginBottom: "1rem",
    "&:hover": {
      background: "none",
    },
  },
  ".MuiLink-root": {
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "1rem",
    textTransform: "uppercase",
    color: "text.linkFooter",
  },
  ".MuiList-root": {
    padding: 0,
    mb: "2rem",
  },
  ".MuiMenuItem-root": {
    minHeight: { xs: 0 },
  },
};

const copyright = {
  fontSize: "0.625rem",
  justifyContent: "space-between",
  letterSpacing: "1px",
  lineHeight: "0.75rem",
  padding: "40px 0",
  width: "100%",
  borderTop: "1px solid",
  borderColor: "border.footer",
  ".MuiGrid-item": {
    mb: { xs: "20px", md: 0 },
    textAlign: "left",
  },
  ".MuiTypography-root": {
    fontSize: { xs: "0.75rem", md: "0.625rem" },
    fontWeight: "400",
    letterSpacing: "1px",
    lineHeight: "12px",
    textTransform: "uppercase",
  },
  a: {
    color: "text.linkFooter",
  },
};

const socialIcon = (theme: Theme) => ({
  "& svg": {
    ...(theme.palette.mode === "dark" && {
      filter:
        "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(3447%) hue-rotate(79deg) brightness(79%) contrast(130%);",
    }),
  },
});

interface FooterProps {
  onSubscribe?: (email: string) => string | null;
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ onSubscribe, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <footer>
        <Container maxWidth="lg">
          <Grid container sx={footerTop}>
            <Grid
              item
              container
              sx={footerLinks}
              columnSpacing={{ xs: 5, md: 10 }}
              xs={12}
              wrap="wrap"
              zeroMinWidth
            >
              <Grid item xs={6} md={"auto"}>
                <MenuList>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/about/">
                      <Typography variant="h5">ABOUT</Typography>
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/about/">ONXRP</MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/about/#showcase-team">
                      SHOWCASE TEAM
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/wp-content/uploads/2022/04/onxrp_whitepaper_1.1-2.pdf">
                      WHITE PAPER
                    </MuiLink>
                  </MenuItem>
                </MenuList>
              </Grid>
              <Grid item xs={6} md={"auto"}>
                <MenuList>
                  <MenuItem>
                    <MuiLink href="https://dex.onxrp.com/">
                      <Typography variant="h5">TRADE</Typography>
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://dex.onxrp.com/">DEX</MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://dex.onxrp.com/">OXP</MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://dex.onxrp.com/?base=XPUNK&quote=XRP">
                      XPUNKS
                    </MuiLink>
                  </MenuItem>
                </MenuList>
              </Grid>
              <Grid item xs={6} md={"auto"}>
                <MenuList>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/telegraph/">
                      <Typography variant="h5">TELEGRAPH</Typography>
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/education/">
                      EDUCATION
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/category/xrpl/">
                      XRPL
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/category/trading-101/">
                      TRADING 101
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/glossary/">
                      GLOSSARY
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/resources/">
                      RESOURCES
                    </MuiLink>
                  </MenuItem>
                </MenuList>
              </Grid>
              <Grid item xs={6} md={"auto"}>
                <MenuList>
                  <MenuItem>
                    <MuiLink href="https://xmc.onxrp.com/">
                      <Typography variant="h5">PROJECTS</Typography>
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://xmc.onxrp.com/">XMC</MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/project-listing-requirements/">
                      LISTING REQUIREMENTS
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://xmc.onxrp.com/projects/OXP">
                      ONXRP
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://xmc.onxrp.com/projects/XPUNK">
                      XPUNKS
                    </MuiLink>
                  </MenuItem>
                </MenuList>
              </Grid>
              <Grid item xs={6} md={"auto"}>
                <MenuList>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/onxrp-tv/">
                      <Typography variant="h5">ONXRP TV</Typography>
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://onxrp.com/onxrp-tv/">
                      PODCASTS
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink href="https://www.youtube.com/channel/UC9v9WC-CyenpoNE94nYM8KQ">
                      YOUTUBE
                    </MuiLink>
                  </MenuItem>
                </MenuList>
              </Grid>
            </Grid>
            <Grid item xs={12} lg container ml="auto" mb={3}>
              <Grid item mr={4}>
                <MuiLink
                  href="https://www.youtube.com/channel/UC9v9WC-CyenpoNE94nYM8KQ"
                  target="_blank"
                  sx={socialIcon}
                >
                  <YouTubeIcon />
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink
                  href="https://twitter.com/onXRPdotcom"
                  target="_blank"
                  sx={socialIcon}
                >
                  <TwitterIcon />
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            sx={{ margin: "32px 0 40px" }}
          >
            <Grid item textAlign="left" alignSelf={"center"} pr={4} mb={{ xs: 3, sm: 0 }}>
              <Logo />
            </Grid>
            <Grid item xs={12} sm md={6}>
              <SubscribeInput onSubscribe={onSubscribe} />
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-between"} sx={copyright}>
            <Grid item xs={6} sm="auto">
              <Typography>ONXRP.COM © 2022 ALL RIGHTS RESERVED</Typography>
            </Grid>
            <Grid item xs={6} sm="auto">
              <MuiLink href="https://onxrp.com/terms-conditions/">
                TERMS & CONDITIONS
              </MuiLink>
              {" | "}
              <MuiLink href="https://onxrp.com/privacy-policy/">
                PRIVACY POLICY
              </MuiLink>
            </Grid>
            <Grid item>
              <Typography>
                POWERED BY{" "}
                <Box component="b" sx={{ color: "text.xpunk" }}>
                  XPUNK
                </Box>{" "}
                WITH LOVE
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </ThemeProvider >
  );
};

export default Footer;
