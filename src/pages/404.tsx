import { HOME_URL } from "@/constants/path";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Page404: NextPage = () => {
  return (
    <>
      <div className="flex justify-center mb-10">
        <Image
          width={400}
          height={400}
          src="/next.svg"
          alt="404 page not found"
        />
      </div>
      <p className="tracking-widest text-center ">
        從前有座山，
        <br />
        山裏有座廟。
        <br />
        廟裏有個頁面，
        <br />
        我現在找不到...
        <br />
        <br />
        <span>
          我找
          <Link
            href={HOME_URL}
            className="mx-2 font-semibold underline underline-offset-4 text-zinc-800"
          >
            首頁
          </Link>
          去...
        </span>
      </p>
    </>
  );
};

export default Page404;
