import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface TagsProps {}

export const getServerSideProps: GetServerSideProps<TagsProps> = async () => {
  return {
    props: {},
  };
};

const Tags: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  return <></>;
};

export default Tags;
