type IconButtonSize = "small" | "medium" | "large";

interface IconButtonProps {
  size?: IconButtonSize;
  iconPath: string;

  onClick: () => void;
}

const small = "w-[18px] h-[18px]";
const medium = "w-[23px] h-[23px]";
const large = "w-[42px] h-[42px]";

const buttonSize = {
  small,
  medium,
  large,
};

export const IconButton = ({
  onClick,
  size = "medium",

  iconPath,
}: IconButtonProps) => {
  return (
    <button className={buttonSize[size]} type="button" onClick={onClick}>
      <img src={iconPath} />
    </button>
  );
};
