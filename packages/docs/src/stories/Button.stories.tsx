import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@alfa-ui/react"
import { ArrowRight } from "phosphor-react"

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Save",
    variant: "secondary",
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Cancel",
    variant: "tertiary",
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: "Small button",
    size: "sm",
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
}
