import { Button, type ButtonProps } from "@alfa-ui/react"
import { Meta, StoryObj } from "@storybook/react"

import { ArrowRight } from "phosphor-react"

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
    type: "button",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: { action: "Click" },
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

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
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
    children: "Disabled Button",
    disabled: true,
  },
}

export const SubmitButton: StoryObj<ButtonProps> = {
  args: {
    children: "Submit Form",
    type: "submit",
  },
}
