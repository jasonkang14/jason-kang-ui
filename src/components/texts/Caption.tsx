interface ICaptionProps {
  children: string;
}

export function Caption({ children }: ICaptionProps) {
  return (
    <h6 className="flex items-center text-xs text-center text-secondary border border-secondary rounded-caption px-1.5 h-[18px]">
      {children}
    </h6>
  );
}
