import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logoImg from "../img/logoOne.jpeg";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      //marginBottom: theme.spacing(-5),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <div id="clientes" style={{ minHeight:`55%` }}>
      <Box sx={{ mt: 10 }}>
      <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        />
        <br/>
      <CustomContainer>
        <CustomBox>
          <img style={{ height:`100px`, borderRadius:`10px`,border:`medium outset #6ABAFF`  }} src={logoImg} alt="logo" />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Algunos de nuestros clientes
          </Typography>
        </CustomBox>

      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        
      </Container>
    </Box>
    </div>
  );
};

export default Companies;
