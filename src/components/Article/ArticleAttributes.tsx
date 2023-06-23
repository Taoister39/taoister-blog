import { postTypeMap } from "@/common/config/postTypeMap";
import { Post } from "@/common/types/post";
import ClassifyTag from "@/components/Tag/ClassifyTag";
import PersonalityTag from "@/components/Tag/PersonalityTag";
import TypeTag from "@/components/Tag/TypeTag";
import { formatNumber } from "@/utils/number";
import { formatTime } from "@/utils/time";
import { FunctionComponent } from "react";
import { FaCalendarAlt, FaEye } from "react-icons/fa";

interface ArticleAttributesProps {
  item: Post;
}

const ArticleAttributes: FunctionComponent<ArticleAttributesProps> = ({
  item,
}) => {
  return (
    <div className="items-center hidden md:flex gap-4 text-size-small">
      {/* 類型標籤 -- 是否原創 */}
      <TypeTag type={item.type} />
      {/* 發佈時間 -- 更新時間*/}
      <div className="inline-flex items-center space-x-1 md:justify-center text-secondary text-size-small">
        <FaCalendarAlt />
        <span>{formatTime(item.createdAt)}</span>
      </div>
      {/* 分类 */}
      {item.categories?.length && (
        <ClassifyTag categories={item.categories} id={item.id} />
      )}

      {/* 标签 */}
      {item.tags?.length && <PersonalityTag tags={item.tags} id={item.id} />}

      {/* 閱讀數 */}
      <div className="inline-flex items-center space-x-2 text-secondary">
        <FaEye />
        <span>{formatNumber(item.view)}</span>
      </div>
    </div>
  );
};

export default ArticleAttributes;
