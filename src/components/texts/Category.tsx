import { flexCenter } from "../../styles/flex";

interface ICategoryProps {
  children: string;
}

export default function Category({ children }: ICategoryProps) {
  return (
    <h5
      className={`bg-tertiary text-xs text-white rounded-[2px] ${flexCenter} h-text px-3`}
    >
      {children}
    </h5>
  );
}
