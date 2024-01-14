import type { Meta, StoryObj } from "@storybook/react";

import { BarCard } from "../../components";

const meta = {
  title: "Utilities/BarCard",
  component: BarCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "술집 이름",
      defaultValue: "술집 이름",
    },
    category: {
      control: "text",
      description: "카테고리",
      defaultValue: "카테고리",
    },
    description: {
      control: "text",
      description: "한 줄짜리로 들어가는 간단한 술집 설명 텍스트. 최대 여…",
      defaultValue: "한 줄짜리로 들어가는 간단한 술집 설명 텍스트. 최대 여…",
    },
    tags: {
      control: "array",
      description: "태그 리스트",
      defaultValue: ["태그1", "태그2", "태그3"],
    },
    imagePath: {
      control: "text",
      description: "술집 이미지 경로",
      defaultValue: "https://kr.object.ncloudstorage.com/bars/bar.png",
    },
    rating: {
      control: "number",
      description: "평점",
      defaultValue: 3.5,
    },
  },
} satisfies Meta<typeof BarCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBarCard: Story = {
  args: {
    name: "술집 이름",
    category: "카테고리",
    description: "한 줄짜리로 들어가는 간단한 술집 설명 텍스트. 최대 여…",
    tags: ["태그1", "태그2", "태그3"],
    imagePath: "https://kr.object.ncloudstorage.com/bars/bar.png",
    rating: 3.5,
  },
};

export const BarCardWithTextButton: Story = {
  args: {
    name: "술집 이름",
    category: "카테고리",
    description: "한 줄짜리로 들어가는 간단한 술집 설명 텍스트. 최대 여…",
    tags: ["태그1", "태그2", "태그3"],
    imagePath: "https://kr.object.ncloudstorage.com/bars/bar.png",
    rating: 3.5,
  },
};
