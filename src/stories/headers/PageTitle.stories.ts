import type { Meta } from "@storybook/react";
import { PageTitle } from "./PageTitle";

const meta = {
  title: "Headers/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "[text]", description: "페이지 제목" },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
