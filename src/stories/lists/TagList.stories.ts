import type { Meta, StoryObj } from "@storybook/react";

import { TagList } from "../../components/list/TagList";

const meta = {
  title: "Lists/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTagList: Story = {
  args: {},
};
