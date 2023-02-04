import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const Servicios = () => {
  const ServiciosBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));


  const ServiciosTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));


  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        />
        <Container>
          <ServiciosTextBox>
            <Typography
              sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
            >
              Featured Servicios
            </Typography>
            <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
              Everything you need to know when looking for a new home!
            </Typography>
          </ServiciosTextBox>

          <ServiciosBox>
            {properties.map((property) => (
              <House
                key={property.id}
                img={property.img}
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space}
              />
            ))}
          </ServiciosBox>
        </Container>
      
    </Box>
  );
};

export default Servicios;
