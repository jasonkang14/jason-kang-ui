interface TagButtonProps {
  children: string;
  isActive?: boolean;
  isDark?: boolean;
  onClick: () => void;
}

const lightActiveStyle = "text-primary border border-primary";
const lightInactiveStyle = "bg-mono100 text-mono200";
const darkActiveStyle = "bg-white text-primary";
const darkInactiveStyle = "bg-dark-inactive text-white border border-white";

export const TagButton = ({
  onClick,
  isActive = false,
  isDark = true,
  children,
}: TagButtonProps) => {
  let appliedStyle = "";
  if (isDark) {
    appliedStyle = isActive ? darkActiveStyle : darkInactiveStyle;
  } else {
    appliedStyle = isActive ? lightActiveStyle : lightInactiveStyle;
  }

  return (
    <button
      className={`rounded-tag-button ${appliedStyle} text-sm px-3 h-[34px]`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
