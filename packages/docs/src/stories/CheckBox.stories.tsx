import type { Meta, StoryObj } from "@storybook/react"
import { Box, Checkbox, Text, type CheckboxProps, } from "@alfa-ui/react"

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()} {/* A entrada será renderizada aqui */}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: "Type your email address",
  },
}
