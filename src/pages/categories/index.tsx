import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface CategoriesProps {}

export const getServerSideProps: GetServerSideProps<
  CategoriesProps
> = async () => {
  return {
    props: {},
  };
};

const Categories: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  return <></>;
};

export default Categories;
