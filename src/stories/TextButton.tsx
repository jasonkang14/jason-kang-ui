interface TextButtonProps {
  theme?: "dark" | "light" | "social";
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

export const TextButton = ({
  onClick,
  theme = "dark",
  disabled = false,
  children,
}: TextButtonProps) => {
  const buttonStyle = () => {
    if (theme === "dark") {
      return "bg-primary text-white";
    }

    if (theme === "light") {
      return "bg-white text-primary";
    }

    if (theme === "social") {
      return "bg-social text-white";
    }
  };

  return (
    <button
      className={`rounded-primary-button disabled:bg-mono100 disabled:text-mono200 text-center text-button ${buttonStyle()} w-full h-[59px]`}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
