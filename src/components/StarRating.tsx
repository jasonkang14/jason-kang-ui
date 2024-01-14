import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStar = (index: number) => {
    const starFilled = index <= Math.max(hoverRating, rating);
    return (
      <span
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
        style={{ cursor: "pointer", color: starFilled ? "orange" : "grey" }}
      >
        ★
      </span>
    );
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => index + 1).map(renderStar)}
    </div>
  );
};

export default StarRating;
