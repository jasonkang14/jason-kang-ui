interface ILabelProps {
  children: string;
  htmlFor: string;
}

export default function Label({ children, htmlFor }: ILabelProps) {
  return (
    <label className="text-sm text-primary inline-block" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
