import { BLOG_AUTHOR } from "@/constants/blog";
import { IListResponse, IResponse } from "@/types/base";
import { POST_TYPE_ENUM } from "@/types/enum";
import { Post } from "@/types/post";
import { Profile } from "@/types/profile";
import ArticleAttributes from "@/components/Article/ArticleAttributes";
import ArticleTitle from "@/components/Article/ArticleTitle";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import "md-editor-rt/lib/style.css";
import MdEditor from "md-editor-rt";
import { formatTime } from "@/utils/time";
import { getProfileApi } from "@/api/profile";
import { getPostApi, getPostListApi } from "@/api/post";

interface ArticleDetailProps {
  data: IResponse<Post>;
  profile: IResponse<Profile>;
}

export const getServerSideProps: GetServerSideProps<
  ArticleDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string };

  const data: IResponse<Post> = await getPostApi(id).then((res) => res.data);
  const profile: IResponse<Profile> = await getProfileApi().then(
    (res) => res.data
  );

  return {
    props: {
      data,
      profile,
    },
  };
};

const ArticleDetailPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, profile }) => {
  const post = data.data;
  const author = BLOG_AUTHOR;
  return (
    <div className="space-y-2">
      <Head>
        <title>
          {author}的博客-{post.title}
        </title>
      </Head>

      <ArticleTitle title={post.title} />

      <ArticleAttributes item={post} />

      <MdEditor modelValue={post.content} previewOnly />

      <div className="flex justify-center pt-10 text-xs text-secondary">
        —— <span className="mx-2">最后更新于{formatTime(post.updatedAt)}</span>
        ——
      </div>
    </div>
  );
};

export default ArticleDetailPage;
