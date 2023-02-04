import Clientes from "./Components/Clientes";
import Guia from "./Components/Guia";
import Home from "./Components/Home";
//import Servicios from "./Components/Servicios";
import Nosotros from "./Components/Nosotros";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/material";

import './Components/Estilos.css'

function App() {
  return (
    <>
      <div className="menu">
        <Box className="fixed" sx={{ backgroundColor: "#E6F0FF" }}>
          <Navbar />
        </Box>
      </div>
      <div className="wrapper" >
          <Home />
          <Guia />
          <Clientes />
          
          <Nosotros />
          <Footer />
      </div>
    </>
  );
}

export default App;

//<Servicios />