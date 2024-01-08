import type { Meta, StoryObj } from "@storybook/react";
import TextFieldLabel from "../../components/textfields/TextFieldLabel";

const meta = {
  title: "TextFields/TextFieldLabel",
  component: TextFieldLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "입력값",
      defaultValue: "레이블",
    },
    htmlFor: {
      control: "text",
      description: "input과 연결하는 값",
      defaultValue: "label",
    },
  },
} satisfies Meta<typeof TextFieldLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "레이블",
    htmlFor: "label",
  },
};
