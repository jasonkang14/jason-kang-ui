import { flexCenter } from "../../styles/flex";

interface ICaptionProps {
  children: string;
}

export function Caption({ children }: ICaptionProps) {
  return (
    <h6
      className={`${flexCenter} text-xs   text-secondary border border-secondary rounded-caption px-1.5 h-text`}
    >
      {children}
    </h6>
  );
}
