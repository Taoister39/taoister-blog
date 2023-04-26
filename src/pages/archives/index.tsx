import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { FunctionComponent } from "react";

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
