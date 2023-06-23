import { getPostCategory } from "@/api/postCategory";
import { CategoryItemOfPost } from "@/components/Category/CategoryItem";
import { PostCategoryWithPost } from "@/types/postCategory";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface CategoryIdPageProps {
  categories: PostCategoryWithPost;
}

export const getServerSideProps: GetServerSideProps<
  CategoryIdPageProps
> = async ({ params }) => {
  const { data } = await getPostCategory(params?.id as string);

  return {
    props: {
      categories: data.data,
    },
  };
};

const CategoryIdPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ categories }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-zinc-800 relative transition-all-in-one  py-6 pl-4  after:absolute after:w-[6px] after:h-full after:left-0 after:top-0 after:bg-zinc-100 before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400 before:-left-0 before:z-10  border-zinc-200 before:top-1/2 before:-translate-y-1/2">
        {categories.name} <span className="text-lg text-secondary">分類</span>
      </h2>

      <ul className="flex flex-col ">
        {categories.posts.map((item, index) => (
          <CategoryItemOfPost post={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryIdPage;
