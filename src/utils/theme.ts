'use client'

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    }
});

const colors = {
  primary: "#202020",
  secondary: "#bcbcbc",
  secondary_fixed: "#fff"
}

const customTheme = extendTheme({ colors });

export default customTheme;