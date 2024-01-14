import type { Meta, StoryObj } from "@storybook/react";

import { NavigationBar } from "../../components/utilities/NavigationBar";

const meta = {
  title: "Utilities/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "360px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "페이지 제목",
    },
    color: {
      control: { type: "select", options: ["primary", "secondary"] },
      description: "텍스트 컬러",
    },
    showBackButton: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "뒤로가기 버튼 표시 여부",
    },
    showCancelButton: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "닫기 버튼 표시 여부",
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    title: "타이틀",
    color: "primary",
  },
};

export const NavigationBarWithBackButton: Story = {
  args: {
    title: "타이틀",
    color: "primary",
    showBackButton: true,
  },
};

export const NavigationBarWithCancelButton: Story = {
  args: {
    title: "타이틀",
    color: "primary",
    showCancelButton: true,
  },
};

export const NavigationBarWithBothButtons: Story = {
  args: {
    title: "타이틀",
    color: "primary",
    showBackButton: true,
    showCancelButton: true,
  },
};
