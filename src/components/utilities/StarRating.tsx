import { useState } from "react";

interface IStarRatingProps {
  initialRating: number;
}

export default function StarRating({ initialRating }: IStarRatingProps) {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number>(initialRating);

  const handleMouseOver = (index: number, isLeftHalf: boolean) => {
    const newRating = isLeftHalf ? index + 0.5 : index + 1;
    setHoverRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleMouseClick = () => {
    setRating(hoverRating);
  };

  const getImageSrc = (index: number) => {
    if (hoverRating > index + 0.5 || (!hoverRating && rating > index + 0.5)) {
      return "/icons/ic-full-star.svg";
    } else if (hoverRating > index || (!hoverRating && rating > index)) {
      return "/icons/ic-half-star.svg";
    } else {
      return "/icons/ic-empty-star.svg";
    }
  };

  return (
    <div onClick={handleMouseClick}>
      {Array.from({ length: 5 }, (_, index) => (
        <button key={index} style={{ display: "inline-block" }}>
          <img
            className="min-h-3 min-w-3 cursor-pointer"
            src={getImageSrc(index)}
            onMouseOver={() => handleMouseOver(index, true)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const isLeftHalf = e.clientX - rect.left < rect.width / 2;
              handleMouseOver(index, isLeftHalf);
            }}
            onMouseLeave={handleMouseLeave}
            alt="star"
          />
        </button>
      ))}
    </div>
  );
}
