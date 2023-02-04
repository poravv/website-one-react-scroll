import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}
    >
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Empresa
            </Typography>
            <a style={{ textDecoration :`none`,color:`black` }} href="http://one.com.py/webmail">
            <FooterLink>Webmail</FooterLink>
            </a>
            <br />
            <FooterLink>Server</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Encontranos en
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
            </Typography>

            <IconBox>
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/onesrlpy">
              <FacebookIcon/>
              </a>
              <a rel="noreferrer" target="_blank" href="/">
                <TwitterIcon/>
              </a>
              <a rel="noreferrer" target="_blank" href="/">
                <LinkedInIcon/>
              </a>
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
