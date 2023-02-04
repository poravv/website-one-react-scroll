import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
/*
import CustomButton from "./CustomButton";
<CustomButton
backgroundColor="#fff"
color="#17275F"
buttonText="Get Started Now"
getStartedBtn={true}
/>
*/

const Nosotros = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <div id='nosotros' style={{ marginTop:`50px` }}>
      
      <CustomBox>
      <CustomContainer>
        <Box>
       
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Lo que debes saber sobre nosotros
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 0 }}
          >
            One fue fundada en el año 200- en la ciudad de Capiatá – Paraguay por el Mgtr. Ever Meza. 
          </Typography>
          
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Nos dedicamos especialmente al desarrollo de software a medida para los clientes así también asesoramiento y acompañamiento para desarrollo de proyectos y licitaciones.
          </Typography>


        </Box>

        <img
          src={'https://www.disersoft.net/wp-content/uploads/2021/09/banner-diseno-de-software-disersoft.png'}
          alt="illustration"
          style={{ maxWidth: "70%" }}
        />
      </CustomContainer>
    </CustomBox>
    </div>
  );
};

export default Nosotros;
