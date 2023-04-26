import { FunctionComponent, ReactNode } from "react";

interface TypeTagProps {
  children: ReactNode;
}

const TypeTag: FunctionComponent<TypeTagProps> = ({ children }) => {
  return (
    //   {/* 是否原創 */}
    <div className="inline-flex items-center justify-center h-4 px-1 text-xs text-white bg-zinc-500">
      {children}
    </div>
  );
};

export default TypeTag;
