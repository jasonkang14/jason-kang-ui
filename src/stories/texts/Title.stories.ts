import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "../../components/texts/Title";

const meta = {
  title: "Texts/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "Title",
      description: "타이틀 텍스트",
      control: "text",
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "text",
  },
};
