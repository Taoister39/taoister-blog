import { IListResponse } from "@/types/base";
import { Post } from "@/types/post";
import ArticleItem from "@/components/Article/ArticleItem";
import { FunctionComponent } from "react";

interface ArticleListProps {
  data: Post[];
}

const ArticleList: FunctionComponent<ArticleListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <ArticleItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default ArticleList;
