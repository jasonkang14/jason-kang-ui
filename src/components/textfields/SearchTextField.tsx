import { ChangeEvent, useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { flexRowSpaceBetweenCenter } from "../../styles/flex";

interface SearchTextFieldProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onIconClick: () => void;
  placeholder: string;
  isError?: boolean;
}

export const SearchTextField = ({
  onChange,
  onIconClick,
  placeholder,
  value = "",
}: SearchTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`rounded text-base pb-2 w-full ${flexRowSpaceBetweenCenter}`}
    >
      {!isFocused && !value && (
        <img className="mr-2" src="/icons/ic-search.svg" />
      )}
      <input
        className=".placeholder-mono200"
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        value={value}
      />
      {!!value && (
        <IconButton
          iconPath={"/icons/ic-delete-dark.svg"}
          size="small"
          onClick={onIconClick}
        />
      )}
    </div>
  );
};
