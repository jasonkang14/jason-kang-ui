import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
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

    disabled: {
      control: { type: "boolean" },
      description: "버튼 활성화 여부",
      defaultValue: "Button",
    },
    theme: {
      control: { type: "select", options: ["dark", "light", "social"] },
      description: "버튼 테마",
      defaultValue: "Button",
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveDark: Story = {
  args: {
    disabled: false,
    theme: "dark",
    children: "Button",
  },
};