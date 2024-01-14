import { flexColumn } from "../../styles/flex";
import { IBar } from "../../types/barTypes";
import { BarCard } from "../utilities/BarCard";

interface IBarListProps {
  barList: IBar[];
}

export function BarList({ barList }: IBarListProps) {
  return (
    <div className={`${flexColumn} gap-y-5`}>
      {barList.map((bar, index) => (
        <BarCard
          key={`bar-${index}`}
          imagePath={bar.imagePath}
          name={bar.name}
          tags={bar.tags}
          category={bar.category}
          description={bar.description}
          rating={bar.rating}
        />
      ))}
    </div>
  );
}
