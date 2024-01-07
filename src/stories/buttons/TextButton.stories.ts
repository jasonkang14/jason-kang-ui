import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "./TextButton";

const meta = {
  title: "Buttons/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 텍스트",
      defaultValue: "Button",
    },
    color: {
      control: { type: "select", options: ["primary", "secondary", "white"] },
      description: "버튼 테마",
      defaultValue: "primary",
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Button",
  },
};
