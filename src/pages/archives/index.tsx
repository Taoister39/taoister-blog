import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface ArchivesProps {}

export const getServerSideProps: GetServerSideProps<
  ArchivesProps
> = async () => {
  return {
    props: {},
  };
};

const Archives: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  return <></>;
};

export default Archives;
