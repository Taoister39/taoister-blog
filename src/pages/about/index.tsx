import { getAboutApi } from "@/api/about";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import MarkdownEditor from "md-editor-rt";
import { About } from "@/types/about";
import { formatTime } from "@/utils/time";

import "md-editor-rt/lib/style.css";

interface AboutPageProps {
  about: About;
}

export const getServerSideProps: GetServerSideProps<
  AboutPageProps
> = async () => {
  const { data } = await getAboutApi();

  return {
    props: {
      about: data.data,
    },
  };
};

const AboutPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ about }) => {
  const markdownData = about.content ?? "";
  // console.log(markdownData);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-zinc-800 font-semibold text-2xl">關於我</h2>
      <MarkdownEditor modelValue={markdownData} previewOnly />
      <h6 className="text-end mt-5 font-bold">
        更新于 {formatTime(about.updatedAt)}
      </h6>
    </div>
  );
};

export default AboutPage;
