import type { Meta, StoryObj } from "@storybook/react";

import { TagList } from "../../components/list/TagList";

const meta = {
  title: "Lists/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      defaultValue: ["1~2명", "3~5명", "6~8명", "9~10명"],
      description: "태그 리스트",
      control: "array",
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["1~2명", "3~5명", "6~8명", "9~10명"],
  },
};
