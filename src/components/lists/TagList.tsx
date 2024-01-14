import { useState } from "react";
import TagButton from "../buttons/TagButton";

interface ITagList<T extends string> {
  tagList: T[];
}

export default function TagList<T extends string>({ tagList }: ITagList<T>) {
  const [selectedTag, setSelectedTag] = useState<T | "">("");

  return (
    <div className="flex gap-x-4">
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
