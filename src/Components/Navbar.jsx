import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "../img/logo4one.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import './Estilos.css';

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { Link } from "react-scroll";

export const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor:`#E6F0FF`,height:`100%` }}
    >
      <List>
        {["Inicio", "Guia", "Clientes", "Nosotros"].map(
          (text, index) => (
            <ListItem key={index}>
              <ListItemButton style={{ borderRadius:`10px` }}>
                <ListItemIcon >
                  {index === 0 && <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='inicio' href="/inicio" offset={-200} spy={true} smooth={true} duration={500} >{text}</Link>}
                  {index === 1 && <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='guia' href="/guia" offset={-100} spy={true} smooth={true} duration={500} >{text}</Link>}
                  {index === 2 && <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='clientes' href="clientes" offset={-120} spy={true} smooth={true} duration={500} >{text}</Link>}
                  {index === 3 && <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='nosotros' href="nosotros" offset={-120} spy={true} smooth={true} duration={500} >{text}</Link>}
                </ListItemIcon>
                <ListItemText/>
                <Divider/>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));


  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
        
      >
        <Box sx={{ 
          display: "flex", 
          alignItems: "center" }}
          role="presentation"
          >
            <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='inicio' href="/inicio" offset={-200} spy={true} smooth={true} duration={500} ><NavbarLogo style={{ height: `70px` }} src={logoImg} alt="logo" /></Link>
          
        </Box>

        <NavbarLinksBox>
          
          <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='inicio' href="/inicio" offset={-200} spy={true} smooth={true} duration={500} >Inicio</Link>
          <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='guia' href="/guia" offset={-100} spy={true} smooth={true} duration={500} >Guia</Link>
          <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='clientes' href="clientes" offset={-120} spy={true} smooth={true} duration={500} >Clientes</Link>
          <Link style={{ textDecoration:`none`,color:`#0F1B4C` }} to='nosotros' href="nosotros" offset={-120} spy={true} smooth={true} duration={500} >Nosotros</Link>
          {/*
          <NavLinkPer ></NavLinkPer>
          <NavLinkPer variant="body2">Services</NavLinkPer>
          <NavLinkPer variant="body2">Listed</NavLinkPer>
          <NavLinkPer variant="body2">Contact</NavLinkPer>
          */}
        </NavbarLinksBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <a href='https://api.whatsapp.com/send?phone=595981506662' rel="noreferrer" target="_blank" style={{ textDecoration:`none` }}>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Contactar"
        />
        </a>
        
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
