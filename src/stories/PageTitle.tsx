interface PageTitleProps {
  children: string;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h2 className="text-2xl text-primary font-bold leading-9">{children}</h2>
  );
};
