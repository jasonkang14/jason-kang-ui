import { PrimaryButton } from "../buttons/PrimaryButton";

interface ModalProps {
  content: string;
  primaryButtonLabel: string;
  onPrimaryButtonClick: () => void;
  hasTextButton?: boolean;
  textButtonLabel?: string;
  onTextButtonClick?: () => void;
}

export const Modal = ({
  content,
  primaryButtonLabel,
  hasTextButton = false,
  textButtonLabel,
  onPrimaryButtonClick,
  onTextButtonClick,
}: ModalProps) => {
  return (
    <div className="rounded-default bg-primary w-[328px] pt-6 px-4 pb-4 flex flex-col">
      <p className="text-white text-center text-sm whitespace-pre-line max-h-[120px] mb-6 overflow-y-auto">
        {content}
      </p>
      <PrimaryButton
        disabled={false}
        theme="light"
        onClick={onPrimaryButtonClick}
      >
        {primaryButtonLabel}
      </PrimaryButton>
      {hasTextButton && (
        <PrimaryButton
          disabled={false}
          theme="modal"
          onClick={onTextButtonClick!}
        >
          {textButtonLabel!}
        </PrimaryButton>
      )}
    </div>
  );
};
