import type { Meta, StoryObj } from "@storybook/react";

import { StarRating } from "../../components/utilities/StarRating";

const meta = {
  title: "Utilities/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initialRating: {
      defaultValue: 3.5,
      description: "별점 정보",
      control: "number",
    },
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialRating: 3.5,
  },
};
