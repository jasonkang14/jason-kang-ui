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
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ActiveDark: Story = {
  args: {
    disabled: false,
    theme: "dark",
    children: "Button",
  },
};
