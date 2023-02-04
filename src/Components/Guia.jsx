import { Box, styled, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/*
import CustomButton from "./CustomButton";
<CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Ver ofertas"
          GuiaBtn={true}
        />
*/

const Guia = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuiasBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuiaBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <div id='guia' style={{ minHeight: `60%` }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }} >
        <br />

        <Typography
          variant="h3"
          sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
        >
          ¿En que podemos ayudarte?
        </Typography>

        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#5A6473",
              textAlign: "center",
            }}
          >
            Aquí algunas de las opciones principales que tenemos para ofrecerte
          </Typography>
        </CustomBox>

        <GuiasBox>
          <GuiaBox>
            <img style={{ height: `170px` }} src={'http://www.soltiperu.com/assets/img/facturacion.png'} alt="buyIcon" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Sistema para negocio
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a rel="noreferrer" href='https://api.whatsapp.com/send?phone=595981506662' target="_blank" style={{ textDecoration: `none` }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
                >
                  Más detalles
                </Typography>
              </a>

              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuiaBox>

          <GuiaBox>
            <img style={{ height: `170px` }} src={'https://www.uaeh.edu.mx/ful/2020/images/icon-seccion/IconoCharla.png'} alt="buyIcon" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Sistema academico
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a rel="noreferrer" href='https://api.whatsapp.com/send?phone=595981506662' target="_blank" style={{ textDecoration: `none` }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
                >
                  Más detalles
                </Typography>
              </a>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuiaBox>

          <GuiaBox>
            <img style={{ height: `170px` }} src={'https://www.pngplay.com/wp-content/uploads/13/Software-Engineering-Transparent-File.png'} alt="buyIcon" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              Software a medida
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a rel="noreferrer" href='https://api.whatsapp.com/send?phone=595981506662' target="_blank" style={{ textDecoration: `none` }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
                >
                  Más detalles
                </Typography>
              </a>ß
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuiaBox>
        </GuiasBox>

      </Box>
    </div>
  );
};

export default Guia;
