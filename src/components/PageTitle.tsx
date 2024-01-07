interface PageTitleProps {
  children: string;
  color: "primary" | "white";
}

export const PageTitle = ({ children, color }: PageTitleProps) => {
  return <h2 className={`text-2xl text-${color}`}>{children}</h2>;
};
