import type { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@alfa-ui/react"
export default {
  title: "Tyography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi libero earum dignissimos ducimus sed sit, est quibusdam! Nobis doloremque eos quibusdam labore blanditiis pariatur nisi, explicabo suscipit molestias iste?",
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
}
