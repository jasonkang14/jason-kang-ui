type TextButtonColor = "primary" | "secondary" | "white";

interface TextButtonProps {
  color?: TextButtonColor;
  children: string;
  onClick: () => void;
}

export const TextButton = ({
  onClick,
  color = "primary",
  children,
}: TextButtonProps) => {
  return (
    <button
      className={`text-${color} text-base}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
