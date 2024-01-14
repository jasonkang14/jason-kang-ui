interface IDescriptionProps {
  children: string;
}

export default function Description({ children }: IDescriptionProps) {
  return <h2 className={`text-sm text-mono200`}>{children}</h2>;
}
