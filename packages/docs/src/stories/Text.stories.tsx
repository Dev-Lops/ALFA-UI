import type { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@alfa-ui/react"
export default {
  title: "Tyography/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi libero earum dignissimos ducimus sed sit, est quibusdam! Nobis doloremque eos quibusdam labore blanditiis pariatur nisi, explicabo suscipit molestias iste?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: { type: "select" },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2`, mas você pode alterar aplicando a propriedade `as` ao componente",
      },
    },
  },
}
