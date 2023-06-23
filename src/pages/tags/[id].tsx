import { getPostTag } from "@/api/postTag";
import { PostTag, PostTagWithPost } from "@/common/types/postTag";
import { TagItemOfPost } from "@/components/Tag/TagItem";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface TagsIdProps {
  tag: PostTagWithPost;
}

export const getServerSideProps: GetServerSideProps<TagsIdProps> = async ({
  params,
}) => {
  const { data } = await getPostTag(params?.id as string);

  return {
    props: { tag: data.data },
  };
};

const TagsIdPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ tag }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-zinc-800 relative transition-all-in-one py-6 pl-4  after:absolute after:w-[6px] after:h-full after:left-0 after:top-0 after:bg-zinc-100 before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400 before:-left-0 before:z-10  border-zinc-200 before:top-1/2 before:-translate-y-1/2">
        {tag.name} <span className="text-lg text-secondary">標籤</span>
      </h2>

      <ul className="flex flex-col text-primary">
        {tag.posts.map((item, index) => (
          <TagItemOfPost post={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TagsIdPage;
