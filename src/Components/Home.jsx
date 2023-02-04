import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import CustomButton from "./CustomButton";

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(-2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <div id='inicio'>
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}>
                Bienvenido a One
              </Typography>
              <Title variant="h1">
                Descubre aquí todo lo que tenemos para ofrecerte
              </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "16px", color: "#5A6473", my: 0 }}>
                One es una empresa Paraguaya que se dedica al rubro de la informática en el área de desarrollo de software.
              </Typography>
              <Typography

                sx={{ fontSize: "16px", color: "#5A6473", my: 4 }}>
                Aquí encontraras más información referente a lo que realizamos.
              </Typography>
              <a rel="noreferrer" href='https://api.whatsapp.com/send?phone=595981506662' target="_blank" style={{ textDecoration: `none` }}>
                <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="Ponte en contacto aqui"
                  HomeBtn={true}
                />
              </a>

              <br />
            </Box>

            <Box style={{ margin: `10px` }} sx={{ flex: "1.25" }}>
              <img
                src={'https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif'}
                alt="HomeImg"
                style={{ maxWidth: "100%", marginBottom: "2rem", borderRadius: `40px` }}
              />
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
