import { postTypeMap } from "@/common/config/postTypeMap";
import { POST_TYPE_ENUM } from "@/common/types/enum";
import { FunctionComponent, ReactNode } from "react";

interface TypeTagProps {
  type: POST_TYPE_ENUM;
}

const TypeTag: FunctionComponent<TypeTagProps> = ({ type }) => {
  return (
    //   {/* 是否原創 */}
    <div className="inline-flex items-center justify-center h-4 px-1 text-xs text-white bg-zinc-500">
      {type ? postTypeMap[type] : "-"}
    </div>
  );
};

export default TypeTag;
