import React from "react";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { theme } from "./data/theme.js";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <CssVarsProvider theme={theme}>
      <NavBar/>
      <Main/>
      <Footer/>
    </CssVarsProvider>
  );
}
