import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Drawer: {
      variants: {
        permanent: {
          dialog: {
            pointerEvents: "auto",
          },
          dialogContainer: {
            pointerEvents: "none",
          },
        },
      },
    },
    Table: {
      variants: {
        mytable: {
          tr: {
            _even: {
              background: "#edfffd",
            },
          },
        },
      },
    },

  },
  fonts: {
    heading: "Poppins",
    body: "Sora",
  },
  colors: {
    brand: {
      pink: "#FF00FF",
      darkPink: "#A42BAD",
      midPink: "#B30AB3",
      darkSky: "#0095C1",
      darkCyan: "#00728A",
      dark: "#26004d",
      darkPurple: "#7002C7",
    },
    primary: {
      dark: "#170041",
      light: "#3DE0FF",
    },
  },
});

export default theme;
