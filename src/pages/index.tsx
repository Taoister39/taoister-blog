import { getPostListApi } from "@/api/post";
import { IListResponse } from "@/types/base";
import { POST_TYPE_ENUM } from "@/types/enum";
import { Post } from "@/types/post";
import ArticleList from "@/components/Article/ArticleList";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface HomeProps {
  data: IListResponse<Post>;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const data = await getPostListApi({ limit: 1000, offset: 0 }).then(
    (res) => res.data
  );

  // console.log(data);

  return { props: { data } };
};

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const posts = data.data.lists || [];

  return <ArticleList data={posts} />;
};

export default Home;
