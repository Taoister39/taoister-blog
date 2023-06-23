import { TAG_URL } from "@/constants/path";
import { PostCategory } from "@/types/postCategory";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FaTags } from "react-icons/fa";

interface PersonalityTagProps {
  tags: PostCategory[];
  id: string;
}

const PersonalityTag: FunctionComponent<PersonalityTagProps> = ({
  id,
  tags,
}) => {
  return (
    <div className="inline-flex space-x-2 items-center text-secondary">
      <FaTags />
      {tags.map((v) => (
        <Link
          href={`${TAG_URL}/${id}`}
          key={v.id}
          className="underline transition-colors duration-300 underline-offset-4 hover:text-zinc-800"
        >
          {v.name}
        </Link>
      ))}
    </div>
  );
};

export default PersonalityTag;
