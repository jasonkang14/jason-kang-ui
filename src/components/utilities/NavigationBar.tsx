import IconButton from "../buttons/IconButton";
import { flexRowSpaceBetweenCenter } from "../../styles/flex";

interface NavigationBarProps {
  onBackButtonClick: () => void;
  onCancelButtonClick: () => void;
  title: string;
  color: "primary" | "white";
  showBackButton?: boolean;
  showCancelButton?: boolean;
}

export default function NavigationBar({
  onBackButtonClick,
  onCancelButtonClick,
  title,
  color,
  showBackButton = false,
  showCancelButton = false,
}: NavigationBarProps) {
  return (
    <div className={`w-full ${flexRowSpaceBetweenCenter}`}>
      <section className="flex items-center">
        {showBackButton && (
          <IconButton
            iconPath={"/icons/ic-back-left.svg"}
            size="medium"
            onClick={onBackButtonClick}
          />
        )}
        <h2 className={`text-2xl text-${color} ${showBackButton && "ml-2"}`}>
          {title}
        </h2>
      </section>
      {showCancelButton && (
        <IconButton
          iconPath={"/icons/ic-cancel.svg"}
          size="medium"
          onClick={onCancelButtonClick}
        />
      )}
    </div>
  );
}
