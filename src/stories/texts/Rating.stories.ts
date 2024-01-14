import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "../../components";

const meta = {
  title: "Texts/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "Rating",
      description: "점수",
      control: "number",
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 3.5,
  },
};
