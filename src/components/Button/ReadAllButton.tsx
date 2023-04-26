import { POST_URL } from "@/common/constants/path";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

interface ReadAllButtonProps {
  id: string;
}

const ReadAllButton: FunctionComponent<ReadAllButtonProps> = ({ id }) => {
  return (
    <div className="flex justify-end pb-6 border-b md:justify-start border-b-zinc-100 ">
      <Link
        href={`${POST_URL}/${id}`}
        className="px-1.5 inline-flex justify-center  items-center space-x-1 py-1 border  text-size-small bg-white border-zinc-300 lg:hover:text-white lg:hover:border-zinc-800 lg:hover:bg-zinc-800 transition-all-in-one"
      >
        <span className="text-xs md:text-size-small">閱讀全文</span>
        <FaAngleDoubleRight className="text-xs md:text-size-small" />
      </Link>
    </div>
  );
};

export default ReadAllButton;
