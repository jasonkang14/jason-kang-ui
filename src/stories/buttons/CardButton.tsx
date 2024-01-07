import { flexCenter, flexColumn } from "../../styles/flex";

type CardButtonSize = "big" | "small";

interface CardButtonProps {
  iconPath?: string;
  label?: string;
  size?: CardButtonSize;
  active?: boolean;
  onClick: () => void;
}

const activeStyle = "text-primary border border-primary font-bold";
const inactiveStyle = "bg-mono100 text-mono200 font-normal";

export const CardButton = ({
  onClick,
  iconPath,
  size,
  active = false,
  label = "",
}: CardButtonProps) => {
  return (
    <button
      className={`
      ${flexCenter}
      ${flexColumn}
      rounded-default ${
        active ? activeStyle : inactiveStyle
      } text-base w-full h-[${size === "big" ? "116" : "102"}px]`}
      type="button"
      onClick={onClick}
    >
      <img src={iconPath} />
      <p>{label}</p>
    </button>
  );
};
