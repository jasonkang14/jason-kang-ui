import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./PageTitle";

const meta = {
  title: "PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "[text]",
      description: "페이지 제목",
      defaultValue: "Page Title",
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Login: Story = {
  args: {
    children: "이메일로 로그인",
  },
};
