import { flexRow } from "../../styles/flex";
import { IBar } from "../../types/barTypes";
import { Category } from "../texts/Category";
import { Description } from "../texts/Description";
import { HashTag } from "../texts/HashTag";
import { Rating } from "../texts/Rating";
import { Title } from "../texts/Title";
import StarRating from "./StarRating";

interface IBarCardProps extends IBar {}

export function BarCard({
  imagePath,
  name,
  tags,
  category,
  description,
  rating,
}: IBarCardProps) {
  const barCardFlex = `${flexRow} items-center gap-x-2`;

  return (
    <div className="flex flex-col">
      <img src={imagePath} className="w-bar h-bar mb-4" alt={name} />
      <div className={`${barCardFlex} mb-2`}>
        <Category>{category}</Category>
        <div className="flex gap-x-4">
          {tags.map((tag, index) => (
            <HashTag key={`tag-${index}`}>{tag}</HashTag>
          ))}
        </div>
      </div>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <div className={barCardFlex}>
        <StarRating initialRating={rating} />
        <Rating>{rating}</Rating>
      </div>
    </div>
  );
}
