import type { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "@alfa-ui/react"
export default {
  title: "Tyography/Heading",
  component: Heading,
  args: {
    size: "md",
    children: "Custom title",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
}
export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
}
