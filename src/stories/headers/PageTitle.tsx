interface PageTitleProps {
  children: string;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="text-2xl text-primary font-bold leading-9">{children}</h1>
  );
};
