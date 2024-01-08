interface ITextFieldLabelProps {
  children: string;
  htmlFor: string;
}

export default function TextFieldLabel({
  children,
  htmlFor,
}: ITextFieldLabelProps) {
  return (
    <label className="text-sm text-primary inline-block" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
