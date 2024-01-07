interface TextButtonProps {
  children: string;
  onClick: () => void;
}

export const TextButton = ({
  onClick,

  children,
}: TextButtonProps) => {
  return (
    <button className="text-primary" type="button" onClick={onClick}>
      {children}
    </button>
  );
};
