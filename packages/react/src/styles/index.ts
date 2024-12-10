import { opacity } from "./../../../tokens/src/opacity"
import { boxShadow } from "./../../../tokens/src/boxShadow"
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@alfa-ui/tokens"
import { createStitches, defaultThemeMap } from "@stitches/react"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
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
    opacity,
  },
})
