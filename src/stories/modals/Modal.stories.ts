import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../../components/Modal";

const meta = {
  title: "Modals/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "모달 내용",
    },
    primaryButtonLabel: {
      control: "text",
      description: "메인 버튼 라벨",
      defaultValue: "확인",
    },
    onPrimaryButtonClick: {
      description: "메인 버튼 클릭 이벤트",
    },
    textButtonLabel: {
      control: "text",
      description: "텍스트 버튼 라벨",
      defaultValue: "취소",
    },
    onTextButtonClick: {
      description: "텍스트 버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {
    content: `모달 텍스트를 입력해주세요.
    모달 텍스트를 입력해주세요. 한 줄로 길게 이어질 경우입니다.한 줄로 길게 이어질 경우입니다
    
    문단이 나뉠 경우입니다. 문단이 나뉠 경우입`,
    primaryButtonLabel: "확인",
  },
};

export const ModalWithTextButton: Story = {
  args: {
    content: `모달 텍스트를 입력해주세요.
    모달 텍스트를 입력해주세요. 한 줄로 길게 이어질 경우입니다.한 줄로 길게 이어질 경우입니다
    
    문단이 나뉠 경우입니다. 문단이 나뉠 경우입`,
    primaryButtonLabel: "확인",
    textButtonLabel: "취소",
    hasTextButton: true,
  },
};
