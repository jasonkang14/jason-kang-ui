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
    color: {
      control: { type: "select", options: ["primary", "white"] },
      description: "페이지 제목 색상",
      defaultValue: "primary",
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    color: "primary",
    children: "이메일로 로그인",
  },
};
