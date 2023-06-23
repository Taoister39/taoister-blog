import { POST_URL } from "@/common/constants/path";
import { Post } from "@/common/types/post";
import ArticleAttributes from "@/components/Article/ArticleAttributes";
import ArticleTitle from "@/components/Article/ArticleTitle";
import ReadAllButton from "@/components/Button/ReadAllButton";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ArticleItemProps {
  item: Post;
}

const ArticleItem: FunctionComponent<ArticleItemProps> = ({ item }) => {
  return (
    <li className="flex flex-col space-y-2.5">
      {/* 標題 */}

      <Link href={`${POST_URL}/${item.id}`}>
        <ArticleTitle title={item.title} />
      </Link>
      {/* 文章屬性 */}
      <ArticleAttributes item={item} />

      {/* 描述 */}
      <p className="text-xs leading-4 md:text-size-small text-secondary">
        {item.description}
      </p>

      {/* 阅读全文 */}
      <ReadAllButton id={item.id} />
    </li>
  );
};

export default ArticleItem;
