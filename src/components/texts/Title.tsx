interface ITitleProps {
  children: string;
}

export function Title({ children }: ITitleProps) {
  return <h2 className={`text-lg text-white font-bold`}>{children}</h2>;
}
