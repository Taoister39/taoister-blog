import { FunctionComponent } from "react";

interface ArticleTitleProps {
  title: string;
}

const ArticleTitle: FunctionComponent<ArticleTitleProps> = ({ title }) => {
  return (
    <h2 className="pt-4 inline-flex md:text-2xl relative text-base font-medium after:absolute hover:text-zinc-800 after:w-0 after:z-10 after:bg-zinc-600 hover:after:w-full after:left-1/2 after:bottom-0 after:h-0.5 hover:after:left-0 after-transition-all-in-one">
      {title}
    </h2>
  );
};

export default ArticleTitle;
