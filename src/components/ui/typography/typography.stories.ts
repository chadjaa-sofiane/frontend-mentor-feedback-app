import { Meta, StoryObj } from "@storybook/react";
import Typography, { TypographyProps } from "./typography";

const meta: Meta<TypographyProps> = {
  title: "design_system/typography",
  component: Typography,
  tags: ["autodocs"],
};

type Story = StoryObj<TypographyProps>;

export const h1: Story = {
  args: {
    variant: "h1",
    children: "Sed egestas ante et vulputate volutpat",
  },
};

export const h2: Story = {
  args: {
    variant: "h2",
    children: "Vestibulum volutpat acus a ultrices sagittis",
  },
};

export const h3: Story = {
  args: {
    variant: "h3",
    children: "Pellentesque a diam sit amet mi ullamcorper vehicula",
  },
};

export const h4: Story = {
  args: {
    variant: "h4",
    children: "Ut scelerisque hendrerit tellus. Integer sagittis",
  },
};

export const body1: Story = {
  args: {
    variant: "body1",
    children:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.",
  },
};


export const body2: Story = {
  args: {
    variant: "body2",
    children:"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu",
  },
};

export const body3: Story = {
  args: {
    variant: "body3",
    children:"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu",
  },
};

export default meta;
