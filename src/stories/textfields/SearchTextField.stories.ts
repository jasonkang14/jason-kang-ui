import type { Meta, StoryObj } from "@storybook/react";

import { SearchTextField } from "./SearchTextField";

const meta = {
  title: "TextFields/SearchTextField",
  component: SearchTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "텍스트 필드에 들어갈 문자열의 정보",
      defaultValue: "검색어를 입력해주세요",
    },
    onChange: {
      description: "입력 이벤트",
    },
  },
} satisfies Meta<typeof SearchTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    placeholder: "입력해주세요",
  },
};
