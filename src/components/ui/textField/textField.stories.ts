import type {Meta, StoryObj} from "@storybook/react"
import TextField from "./textField"

const meta: Meta<typeof TextField> = {
    title: "design_system/text_feld",
    component: TextField
}

type Story = StoryObj<typeof TextField>


export const textField: Story = {
    args: {
        placeholder: "Lorem ipsum dolor"
    }
}

export default meta