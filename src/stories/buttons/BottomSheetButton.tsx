interface BottomSheetButtonProps {
  children: string;
  active?: boolean;
  onClick: () => void;
}

const activeStyle = "text-primary border border-primary font-bold";
const inactiveStyle = "bg-mono100 text-mono200 font-normal";

export const BottomSheetButton = ({
  onClick,
  active = false,
  children,
}: BottomSheetButtonProps) => {
  return (
    <button
      className={`rounded-default ${
        active ? activeStyle : inactiveStyle
      } text-base w-full h-[51px]`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};