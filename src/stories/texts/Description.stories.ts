import type { Meta, StoryObj } from "@storybook/react";

import { Description } from "../../components";

const meta = {
  title: "Texts/Description",
  component: Description,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "설명 텍스트",
      description: "텍스트",
      control: "text",
    },
  },
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "text",
  },
};
