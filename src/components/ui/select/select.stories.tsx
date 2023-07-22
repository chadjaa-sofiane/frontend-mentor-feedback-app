import type { Meta, StoryObj } from "@storybook/react";
import Select from "./select";

const meta: Meta<typeof Select> = {
  title: "design_system/select",
  component: Select
};

type Story = StoryObj<typeof Select>;

export const test: Story = {
  args: {
    title: "Sort by",
    options: [
      {
        label: 'Most Upvotes',
        value: "0"
      },
      {
        label: 'Least Upvotes',
        value: "1"
      },
      {
        label: 'Most Comments',
        value: "2"
      },
      {
        label: 'least Comments',
        value: "3"
      },
    ],
  },
};

export default meta;
