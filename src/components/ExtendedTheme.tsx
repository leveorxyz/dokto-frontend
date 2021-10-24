import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  colors: {
    brand: {
      pink: "#FF00FF",
      darkPink: "#B30AB3",
      darkSky: "#0095C1",
      darkCyan: "#00728A",
      dark: "#26004d",
    },
    primary: {
      dark: "#170041",
      light: "#3DE0FF",
    },
  },
});

export default theme;
