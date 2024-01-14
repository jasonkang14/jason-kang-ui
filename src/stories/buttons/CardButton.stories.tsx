import type { Meta, StoryObj } from "@storybook/react";

import { CardButton } from "../../components";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Buttons/CardButton",
  component: CardButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "116px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "버튼 텍스트",
      defaultValue: "Button",
    },
    iconPath: {
      control: "text",
      description: "카드 버튼에 보이는 아이콘",
      defaultValue: "/icons/ic-all.svg",
    },
    active: {
      control: { type: "boolean" },
      description: "버튼의 옵션이 선택되었는지 여부",
      defaultValue: true,
    },
  },
} satisfies Meta<typeof CardButton>;

export default meta;

export const ActiveButtonWithTextAndIcon: Story = {
  args: {
    active: true,
    label: "Button",
    iconPath: "/icons/ic-all.svg",
  },
};

export const InactiveButtonWithTextAndIcon: Story = {
  args: {
    active: false,
    label: "Button",
    iconPath: "/icons/ic-all.svg",
  },
};

export const ActiveButtonWithIcon: Story = {
  args: {
    active: true,
    iconPath: "/icons/ic-all.svg",
  },
};

export const InactiveButtonWithIcon: Story = {
  args: {
    active: false,
    iconPath: "/icons/ic-all.svg",
  },
};
