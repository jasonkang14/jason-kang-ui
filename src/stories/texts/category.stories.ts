import type { Meta, StoryObj } from "@storybook/react";

import { Category } from "../../components";

const meta = {
  title: "Texts/Category",
  component: Category,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "Category",
      description: "카테고리 텍스트",
      control: "text",
    },
  },
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "text",
  },
};
