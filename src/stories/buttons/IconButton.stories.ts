import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: {
      control: "text",
      description: "icon path",
      defaultValue: "/icons/ic-cancel.svg",
    },

    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "아이콘 크기",
      defaultValue: "/icons/ic-cancel.svg",
    },
    onClick: {
      description: "아이콘 클릭 이벤트",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallSize: Story = {
  args: {
    size: "small",
    iconPath: "/icons/ic-cancel.svg",
  },
};

export const MediumSize: Story = {
  args: {
    size: "medium",
    iconPath: "/icons/ic-cancel.svg",
  },
};

export const LargeSize: Story = {
  args: {
    size: "large",
    iconPath: "/icons/ic-cancel.svg",
  },
};
