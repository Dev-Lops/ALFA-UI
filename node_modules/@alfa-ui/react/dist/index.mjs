// ../tokens/src/opacity.ts
var opacity = {
  0: "0",
  25: "0.25",
  50: "0.5",
  75: "0.75",
  100: "1"
};

// ../tokens/src/boxShadow.ts
var boxShadow = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.2)",
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)"
};

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  teste: "000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  lime200: "#d9f99d",
  lime300: "#bef264",
  lime500: "#84cc16",
  lime700: "#4d7c0f",
  lime900: "#365314"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Poppins, sans-serif",
  heading: "Montserat, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: { ...defaultThemeMap, height: "space", width: "space" },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    boxShadow,
    opacity
  }
});

// src/index.tsx
var Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$lime300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "bold",
  color: "$white",
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4"
      },
      big: {
        fontSize: 16,
        padding: "$3 $6"
      }
    }
  },
  defaultVariants: {
    size: "small"
  }
});
export {
  Button
};
