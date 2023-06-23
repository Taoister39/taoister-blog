import { getPostCategoryList } from "@/api/postCategory";
import { CategoryItem } from "@/components/Category/CategoryItem";
import { PostCategoryWithPostCount } from "@/types/postCategory";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface CategoriesProps {
  categories: PostCategoryWithPostCount[];
  total: number;
}

export const getServerSideProps: GetServerSideProps<
  CategoriesProps
> = async () => {
  const { data } = await getPostCategoryList({ limit: 1000, offset: 0 });

  return {
    props: {
      categories: data.data.lists ?? [],
      total: data.data.total ?? 0,
    },
  };
};

const Categories: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ categories, total }) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-10 text-2xl font-semibold text-zinc-800">分類</h2>
      <div className="flex items-center justify-center mb-10">
        目前共計<span className="inline-block px-1">{total}</span>個分類
      </div>
      <ul className="flex flex-col space-y-4 list-[circle]">
        {categories.map((item, index) => (
          <CategoryItem category={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
