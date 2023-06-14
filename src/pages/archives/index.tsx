import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface ArchivesPageProps {}

export const getServerSideProps: GetServerSideProps<
  ArchivesPageProps
> = async () => {
  return {
    props: {},
  };
};

const ArchivesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  return <></>;
};

export default ArchivesPage;
