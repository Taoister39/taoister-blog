import { GetServerSideProps } from "next";

interface HomeProps {}

export const getServerSideProps: GetServerSideProps<
  HomeProps,
  any
> = async () => {
  return { props: {} };
};

export default function Home() {
  return (
    <>
      <h1>HelloWorld</h1>
    </>
  );
}
