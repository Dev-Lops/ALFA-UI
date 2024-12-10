import type { ComponentProps } from "react"
import { styled } from "../styles"

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray600",
  boxShadow: "$sm",
  border: "1px solid $gray500",
})

export interface BoxProps extends ComponentProps<typeof Box> {}
