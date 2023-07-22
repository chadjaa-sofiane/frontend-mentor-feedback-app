import { Meta, StoryObj } from "@storybook/react";
import DropDown from "./dropdown";

const meta: Meta<typeof DropDown> = {
  title: "design_system/drop_down",
  component: DropDown,
};

type Story = StoryObj<typeof DropDown>;

export const dropDown: Story = {
  args: {
    options: [
      {
        label: "Features",
        value: "features",
      },
      {
        label: "UI",
        value: "ui",
      },
      {
        label: "ux",
        value: "ux",
      },
      {
        label: "Enhancement",
        value: "enhanecemnt",
      },
      {
        label: "Bug",
        value: "bug",
      },
    ],
    onChange: (value) => {
      console.log(value);
    },
  },
};

export default meta;
