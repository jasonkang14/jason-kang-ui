import { ChangeEvent, useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { flexRowSpaceBetweenCenter } from "../../styles/flex";

interface DefaultTextFieldProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onIconClick: () => void;
  type?: "text" | "password";
  placeholder: string;
  isError?: boolean;
}

export const DefaultTextField = ({
  id,
  onChange,
  onIconClick,
  placeholder,
  type = "text",
  value = "",
  isError = false,
}: DefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border-b text-base ${
          isFocused ? "border-secondary" : "border-primary"
        } pb-2 w-full ${flexRowSpaceBetweenCenter}`}
      >
        <input
          id={id}
          className=".placeholder-mono200"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
        {!!value && (
          <IconButton
            iconPath={
              type === "text"
                ? "/icons/ic-delete-dark.svg"
                : "/icons/ic-view.svg"
            }
            size="small"
            onClick={onIconClick}
          />
        )}
      </div>
      {isError && (
        <p className="text-error text-xs absolute -bottom-5">에러메세지</p>
      )}
    </div>
  );
};
