interface TagButtonProps {
  children: string;
  active?: boolean;
  onClick: () => void;
}

const activeStyle = "text-primary border border-primary";
const inactiveStyle = "bg-mono100 text-mono200";

export const TagButton = ({
  onClick,
  active = false,
  children,
}: TagButtonProps) => {
  return (
    <button
      className={`rounded-tag-button ${
        active ? activeStyle : inactiveStyle
      } text-sm px-3 h-[34px]`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
