import { getPostTagList } from "@/api/postTag";
import { PostTagWithPostCount } from "@/types/postTag";
import { TagItem } from "@/components/Tag/TagItem";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface TagsProps {
  tagsData: PostTagWithPostCount[];
  tagsCount: number;
}

export const getServerSideProps: GetServerSideProps<TagsProps> = async () => {
  const tags = await getPostTagList({ limit: 1000, offset: 0 });

  return {
    props: {
      tagsData: tags.data.data.lists ?? [],
      tagsCount: tags.data.data.total ?? 0,
    },
  };
};

const Tags: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ tagsCount, tagsData }) => {
  return (
    <div className="flex flex-col text-zinc-600">
      <h2 className="mb-10 text-2xl font-semibold text-zinc-800">標籤</h2>
      <div className="flex items-center justify-center mb-10">
        目前共計<span className="inline-block px-1">{tagsCount}</span>個標籤
      </div>
      <ul className="flex flex-col space-y-4 list-[circle]">
        {tagsData.map((item, index) => (
          <TagItem tag={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Tags;
