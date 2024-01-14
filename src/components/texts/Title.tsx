interface ITitleProps {
  children: string;
}

export default function Title({ children }: ITitleProps) {
  return <h2 className={`text-lg text-white font-bold`}>{children}</h2>;
}
