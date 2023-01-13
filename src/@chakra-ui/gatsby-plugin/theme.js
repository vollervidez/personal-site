import {extendTheme, theme as baseTheme} from "@chakra-ui/react";
import { theme as proTheme} from "@chakra-ui/pro-theme";

const theme = {
  colors: { ...baseTheme.colors, brand: baseTheme.colors.green },
}

export default extendTheme(theme, proTheme);
