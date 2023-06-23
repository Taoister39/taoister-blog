import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface ArchivesPageProps {
  total: number;
}

export const getServerSideProps: GetServerSideProps<
  ArchivesPageProps
  > = async () => {
  // const {data} = 

  return {
    props: {
      total: 0,
    },
  };
};

const ArchivesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  return (
    <div className="flex flex-col text-zinc-600">
      <ul className="flex flex-col text-zinc-600">
        <li className="relative  py-6 pl-6 border-b after:absolute after:w-[6px] after:h-full after:left-0 after:top-1/2 after:bg-zinc-100 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-zinc-400 before:-left-0 before:z-10 border-dashed border-zinc-200 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1">
          嗯..! 目前共計算
          <span className="px-2 text-lg font-medium">{0}</span>
          篇博客，繼續努李。🤗🤗
        </li>
        {/* {renderList()} */}
      </ul>
    </div>
  );
};

export default ArchivesPage;
