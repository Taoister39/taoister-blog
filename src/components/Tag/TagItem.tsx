import { POST_URL, TAG_URL } from "@/common/constants/path";
import { Post } from "@/common/types/post";
import {
  PostTag,
  PostTagWithPost,
  PostTagWithPostCount,
} from "@/common/types/postTag";
import { dateFormatter, formatTime } from "@/utils/time";
import Link from "next/link";
import { FC, FunctionComponent } from "react";

export const TagItem: FunctionComponent<{ tag: PostTagWithPostCount }> = ({
  tag,
}) => {
  return (
    <li>
      <Link
        href={`${TAG_URL}/${tag.id}`}
        className="mr-2 underline transition-all-in-one underline-offset-4 hover:text-zinc-800"
      >
        {tag.name}
      </Link>
      <span className="text-secondary">{tag.posts}</span>
    </li>
  );
};

export const TagItemOfPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <li className="relative transition-all-in-one py-6 hover:text-zinc-800 hover:font-medium  pl-4 border-b after:absolute after:w-[6px] after:h-full after:left-0 after:top-0 after:bg-zinc-100 before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400 before:-left-0 before:z-10 border-dashed border-zinc-200 before:top-1/2 before:-translate-y-1/2   hover:border-zinc-800 hover:before:bg-zinc-800">
      <Link href={`${POST_URL}/${post.id}`}>
        <span className="mr-4">
          {formatTime(post.createdAt, dateFormatter)}
        </span>
        <span>{post.title}</span>
      </Link>
    </li>
  );
};
