interface IRatingProps {
  children: number;
}

export default function Rating({ children }: IRatingProps) {
  return <h6 className="text-white text-xs">{children}</h6>;
}
