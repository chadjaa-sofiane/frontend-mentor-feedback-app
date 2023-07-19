import type { Meta, StoryObj } from "@storybook/react";

import Button, { props as ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "design_system/button",
  component: Button,
  tags: ["autodocs"],
};

type Story = StoryObj<ButtonProps>;

export const Button1: Story = {
  args: {
    children: "Button 1",
    variant: "button1",
  },
};

export const Button2: Story = {
  args: {
    children: "Button 2",
    variant: "button2",
  },
};

export const Button3: Story = {
  args: {
    children: "Button 3", 
    variant: "button3"
  }
}

export const Button4: Story = {
  args: {
    children: "Button 4", 
    variant: "button4"
  }
}

export const Transparent: Story = {
  args: {
    children: "transparent",
    variant: "transparent"
  }
}

export default meta;
