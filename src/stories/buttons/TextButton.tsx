type TextButtonTheme = "dark" | "light" | "social";

interface TextButtonProps {
  theme?: TextButtonTheme;
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";

const color: Record<TextButtonTheme, string> = { dark, light, social };

export const TextButton = ({
  onClick,
  theme = "dark",
  disabled = false,
  children,
}: TextButtonProps) => {
  return (
    <button
      className={`rounded-primary-button disabled:bg-mono100 disabled:text-mono200 text-center text-base  w-full h-[59px] ${color[theme]}`}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
