import type { Meta, StoryObj } from "@storybook/react";

import { BarList } from "../../components/list/BarList";

const meta = {
  title: "Lists/BarList",
  component: BarList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    barList: {
      defaultValue: [],
      description: "바 리스트",
      control: "array",
    },
  },
} satisfies Meta<typeof BarList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    barList: [
      {
        name: "술집 이름",
        category: "카테고리",
        description: "한 줄짜리로 들어가는 간단한 술집 설명 텍스트. 최대 여…",
        tags: ["태그1", "태그2", "태그3"],
        imagePath: "https://kr.object.ncloudstorage.com/bars/bar.png",
        rating: 3.5,
      },
      {
        name: "술집 이름",
        category: "카테고리",
        description: "한 줄짜리로 들어가는 간단한 술집 설명 텍스트. 최대 여…",
        tags: ["태그1", "태그2", "태그3"],
        imagePath: "https://kr.object.ncloudstorage.com/bars/bar.png",
        rating: 3.5,
      },
    ],
  },
};
