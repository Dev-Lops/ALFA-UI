import { ComponentProps } from "react"
import { styled } from "../styles"

export const Button = styled("button", {
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
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  variants: {
    variant: {
      primary: {
        color: "White",
        backgroundColor: "$lime500",

        "&:not(:disabled):hover": {
          backgroundColor: "$lime300",
        },
      },
      secondary: {
        color: "$lime300",
        border: "2px solid $lime300",

        "&:not(:disabled):hover": {
          backgroundColor: "$lime500",
          color: "$white",
        },
      },
      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
        },
      },
      ghost: {
        color: "$white",

        "&:not(:disabled):hover": {
          color: "$white",
        },
      },
    },
    size: {
      sm: {
        height: 36,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = "Button"
