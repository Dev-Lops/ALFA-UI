import type { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "@alfa-ui/react"
export default {
  title: "Tyography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
}
