import { useState } from "react";
import TagButton from "../buttons/TagButton";

interface ITagList<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: ITagList<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      className="flex gap-x-4"
      onClick={(e) => {
        const eventTarget = e.target as HTMLButtonElement;
        onTagClick(eventTarget.textContent as T);
      }}
    >
      {tagList.map((tag, index) => (
        <TagButton
          key={`tag=${index}`}
          isDark={true}
          isActive={selectedTag === tag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
