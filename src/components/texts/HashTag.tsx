interface IHashTagProps {
  children: string;
}

export default function HashTag({ children }: IHashTagProps) {
  return <h6 className={`text-xs text-tertiary`}>{`#${children}`}</h6>;
}
