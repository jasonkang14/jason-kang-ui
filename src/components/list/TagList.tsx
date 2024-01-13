import { useState } from "react";
import { TagButton } from "../buttons/TagButton";

type TagName = "1~2명" | "3~5명" | "6~8명" | "9~10명";

export function TagList() {
  const tagList: TagName[] = ["1~2명", "3~5명", "6~8명", "9~10명"];
  const [selectedTag, setSelectedTag] = useState<TagName>("1~2명");

  return (
    <div className="flex gap-x-4">
      {tagList.map((tag) => (
        <TagButton
          key={tag}
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
