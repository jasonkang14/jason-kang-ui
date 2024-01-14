import type { Meta, StoryObj } from "@storybook/react";

import { ChatTextField } from "../../components";

const meta = {
  title: "TextFields/ChatTextField",
  component: ChatTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "입력값",
    },
    onChange: {
      description: "입력 이벤트",
    },
    onIconClick: {
      description: "이미지 업로드창 활성화",
    },
  },
} satisfies Meta<typeof ChatTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
