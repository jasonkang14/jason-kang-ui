import { ChangeEvent, useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { flexRowSpaceBetweenCenter } from "../../styles/flex";

interface ChatTextFieldProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onIconClick: () => void;
  type?: "text" | "password";
}

export const ChatTextField = ({
  onChange,
  onIconClick,

  type = "text",
  value = "",
}: ChatTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`border pl-3 py-2.5 pr-4 bg-primary rounded-chat-text-field text-base  ${
        isFocused ? "border-secondary" : "border-white"
      } w-full ${flexRowSpaceBetweenCenter}`}
    >
      <input
        className=".placeholder-mono200 text-white bg-primary rounded-chat-text-field"
        placeholder="메세지를 입력해주세요"
        type={type}
        onChange={onChange}
        value={value}
      />

      <IconButton
        iconPath={"/icons/ic-photo-upload.svg"}
        size="medium"
        onClick={onIconClick}
      />
    </div>
  );
};
