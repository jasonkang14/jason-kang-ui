import type { Meta, StoryObj } from "@storybook/react";

import { Caption } from "../../components";

const meta = {
  title: "Texts/Caption",
  component: Caption,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "Caption",
      description: "캡션 텍스트",
      control: "text",
    },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "text",
  },
};
