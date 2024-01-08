import { flexCenter, flexColumn } from "../../styles/flex";

interface CardButtonProps {
  iconPath?: string;
  label?: string;
  active?: boolean;
  onClick: () => void;
}

const activeStyle = "text-primary border border-primary font-bold";
const inactiveStyle = "bg-mono100 text-mono200 font-normal";

export const CardButton = ({
  onClick,
  iconPath,
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
      } text-base w-full py-4`}
      type="button"
      onClick={onClick}
    >
      <img src={iconPath} />
      <p>{label}</p>
    </button>
  );
};
