import { CATEGORY_URL } from "@/common/constants/path";
import { PostTag } from "@/common/types/postTag";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { FaFolderOpen } from "react-icons/fa";

interface ClassifyTagProps {
  categories: PostTag[];
  id: string;
}

const ClassifyTag: FunctionComponent<ClassifyTagProps> = ({
  id,
  categories,
}) => {
  return (
    <div className="inline-flex items-center text-secondary space-x-2">
      <FaFolderOpen />
      {categories.map((v) => (
        <Link
          href={`${CATEGORY_URL}/${id}`}
          className="underline transition-colors duration-300 underline-offset-4 hover:text-zinc-800"
          key={id}
        >
          {v.name}
        </Link>
      ))}
    </div>
  );
};

export default ClassifyTag;
