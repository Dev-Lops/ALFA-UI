import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarProps } from "@alfa-ui/react"
export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/dev-lops.png",
    alt: "Anderson Lopes",
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
