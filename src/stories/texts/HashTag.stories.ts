import type { Meta, StoryObj } from "@storybook/react";

import { HashTag } from "../../components";

const meta = {
  title: "Texts/HashTag",
  component: HashTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "HashTag",
      description: "해시태그 텍스트",
      control: "text",
    },
  },
} satisfies Meta<typeof HashTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "text",
  },
};
