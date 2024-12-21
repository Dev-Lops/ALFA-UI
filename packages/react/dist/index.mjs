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
  lime400: "#d9f99d",
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
  paragraph: "Roboto, sans-serif",
  title: "Alegreya SC, sans-serif",
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

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray600",
  boxShadow: "$sm",
  border: "1px solid $gray500"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$title",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "xl" },
      md: { fontSize: "2xl" },
      lg: { fontSize: "4xl" },
      "2xl": { fontSize: "5xl" },
      "3xl": { fontSize: "6xl" },
      "4xl": { fontSize: "7xl" },
      "5xl": { fontSize: "8xl" },
      "6xl": { fontSize: "9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2({ alt, src, ...props }) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, { src, alt, ...props }),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "0 $4",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100"
  },
  variants: {
    variant: {
      primary: {
        color: "White",
        backgroundColor: "$lime500",
        "&:not(:disabled):hover": {
          backgroundColor: "$lime300"
        }
      },
      secondary: {
        color: "$lime300",
        border: "2px solid $lime300",
        "&:not(:disabled):hover": {
          backgroundColor: "$lime500",
          color: "$white"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        }
      },
      ghost: {
        color: "$white",
        "&:not(:disabled):hover": {
          color: "$white"
        }
      }
    },
    size: {
      sm: {
        height: 36
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/index.tsx
import { forwardRef } from "react";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variant: {
    size: {
      sm: {
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$lime300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TextInput = forwardRef(
  ({ prefix, ...props }, ref) => {
    return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
      !!prefix && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
      /* @__PURE__ */ jsx2(Input, { ref, ...props }),
      " "
    ] });
  }
);
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$lime300"
  },
  "&:disabled": {
    outline: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/CheckBox/index.tsx
import { Check } from "phosphor-react";

// src/components/CheckBox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckBoxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$lime300"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $lime300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0%)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: "$black",
  width: "$4",
  height: "$4",
  cursor: "pointer",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/CheckBox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function CheckBox({ onCheckedChange, checked, ...props }) {
  return /* @__PURE__ */ jsx3(
    CheckBoxContainer,
    {
      ...props,
      checked,
      onCheckedChange: (checkedValue) => {
        if (onCheckedChange) onCheckedChange(!!checkedValue);
      },
      children: /* @__PURE__ */ jsx3(CheckBoxIndicator, { asChild: true, children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) })
    }
  );
}
CheckBox.displayName = "CheckBox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray100",
  variants: {
    active: {
      true: {
        backgroundColor: "$lime300"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs3(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx4(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ jsx4(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";
export {
  Avatar2 as Avatar,
  Box,
  Button,
  CheckBox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
};
