import * as Checkbox from "@radix-ui/react-checkbox"
import { styled, keyframes } from "../../styles"

export const CheckBoxContainer = styled(Checkbox.Root, {
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
    backgroundColor: "$lime300",
  },

  "&:focus": { border: "2px solid $lime300" },
})

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
})
const slideOut = keyframes({
  from: {
    transform: "translateY(0%)",
  },
  to: {
    transform: "translateY(-100%)",
  },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: "$black",
  width: "$4",
  height: "$4",
  cursor: "pointer",

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})