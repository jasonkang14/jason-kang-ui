import "./button.css";

interface PageTitleProps {
  children: string;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return <h1>{children}</h1>;
};
