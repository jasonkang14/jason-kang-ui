import type { Meta, StoryObj } from "@storybook/react";

import { DefaultTextField } from "./DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "텍스트 필드에 들어갈 문자열의 정보",
      defaultValue: "입력해주세요",
    },
    type: {
      control: { type: "select", options: ["text", "password"] },
      description: "텍스트 필드의 타입",
      defaultValue: "text",
    },
    onChange: {
      description: "입력 이벤트",
    },
    onIconClick: {
      description: "아이콘 버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "primary",
    placeholder: "입력해주세요",
  },
};
