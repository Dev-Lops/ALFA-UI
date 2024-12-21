"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  animation: () => animation,
  boxShadow: () => boxShadow,
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  opacity: () => opacity,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  white: "#FFF",
  black: "#000",
  // Tons de Cinza
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  // Tons de Verde-Limão
  lime100: "#f7feda",
  // Tons mais claros
  lime200: "#d9f99d",
  lime300: "#bef264",
  lime400: "#a3e635",
  // Adição
  lime500: "#84cc16",
  lime600: "#65a30d",
  // Adição
  lime700: "#4d7c0f",
  lime800: "#3f6212",
  // Adição
  lime900: "#365314",
  // Tons de Vermelho
  red100: "#fee2e2",
  // Muito claro
  red200: "#fecaca",
  red300: "#fca5a5",
  red400: "#f87171",
  red500: "#ef4444",
  // Primário
  red600: "#dc2626",
  // Intenso
  red700: "#b91c1c",
  red800: "#991b1b",
  red900: "#7f1d1d"
  // Mais escuro
};

// src/space.ts
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

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fonts = {
  default: "Poppins, sans-serif",
  heading: "Montserat, sans-serif",
  paragraph: "Roboto, sans-serif",
  title: "Alegreya SC, sans-serif",
  code: "monospace"
};

// src/font-sizes.ts
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

// src/font-weights.ts
var fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/boxShadow.ts
var boxShadow = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.2)",
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)"
};

// src/opacity.ts
var opacity = {
  0: "0",
  25: "0.25",
  50: "0.5",
  75: "0.75",
  100: "1"
};

// src/animations.ts
var animation = {
  durations: {
    fast: "200ms",
    normal: "400ms",
    slow: "600ms"
  },
  easings: {
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    slideIn: {
      from: { transform: "translateX(-100%)" },
      to: { transform: "translateX(0)" }
    },
    pulse: {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.05)" },
      "100%": { transform: "scale(1)" }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  animation,
  boxShadow,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  opacity,
  radii,
  space
});
