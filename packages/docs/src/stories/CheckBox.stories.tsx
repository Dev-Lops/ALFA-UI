import type { Meta, StoryObj } from "@storybook/react"
import { Box, Text, CheckBox, CheckBoxProps } from "@alfa-ui/react"

export default {
  title: "Form/Checkbox",
  component: CheckBox,
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
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
  args: {
    placeholder: "Type your email address",
  },
}
