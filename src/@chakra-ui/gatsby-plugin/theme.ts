import {extendTheme, StyleFunctionProps, theme as baseTheme} from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import "@fontsource/roboto";
import '@fontsource/inter/variable.css'

const theme = {
  colors: {
    ...baseTheme.colors,
    brand: "#2A2E45",
  },
  config: {
    ...baseTheme.config,
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      fontFamily: `Roboto`,
    })
  }
};

export default extendTheme(theme, proTheme);
