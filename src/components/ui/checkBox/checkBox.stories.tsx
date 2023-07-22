import type { Meta, StoryObj } from "@storybook/react";
import VotingField from "./checkBox";
import UpIcon from "@/public/svgs/up.svg";

const meta: Meta<typeof VotingField> = {
  title: "design_system/check_box",
  component: VotingField
};

type Story = StoryObj<typeof VotingField>;

export const noneVote: Story = {
  args: {
    label: 99,
    renderIcon: (checked) => <UpIcon className={`${checked ? "[&>path]:stroke-white" : "" }`} />
  },
};
export const upVote : Story = {
  args: {
    label: 0, 
    checked: true
  }
}

export const UX: Story = {
  args: {
    label: "UX"
  }
}

export default meta;
