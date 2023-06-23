import { CATEGORY_URL, POST_URL } from "@/constants/path";
import { Post } from "@/types/post";
import {
  PostCategory,
  PostCategoryWithPost,
  PostCategoryWithPostCount,
} from "@/types/postCategory";
import { dateFormatter, formatTime } from "@/utils/time";
import Link from "next/link";
import { FC, FunctionComponent } from "react";

export interface CategoryItemProps {
  category: PostCategoryWithPostCount;
}

export const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  category,
}) => {
  return (
    <li key={category.id}>
      <Link
        href={`${CATEGORY_URL}/${category.id}`}
        className="mr-2 underline transition-all-in-one underline-offset-4 hover:text-zinc-800"
      >
        {category.name}
      </Link>
      <span className="text-secondary">({category.posts})</span>
    </li>
  );
};

export interface CategoryItemOfPostProps {
  post: Post;
}

export const CategoryItemOfPost: FC<CategoryItemOfPostProps> = ({ post }) => {
  return (
    <li
      key={post.id}
      className="relative transition-all-in-one hover:text-zinc-800 hover:font-medium  py-6 pl-4 border-b after:absolute after:w-[6px] after:h-full after:left-0 after:top-0 after:bg-zinc-100 before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400 before:-left-0 before:z-10 border-dashed border-zinc-200 before:top-1/2 before:-translate-y-1/2   hover:border-zinc-800 hover:before:bg-zinc-800"
    >
      <Link href={`${POST_URL}/${post.id}`}>
        <span className="mr-4">
          {formatTime(post.createdAt, dateFormatter)}
        </span>
        <span>{post.title}</span>
      </Link>
    </li>
  );
};
