import { FunctionComponent } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ARCHIVES_URL, CATEGORY_URL, TAG_URL } from "@/constants/path";
import { FaEnvelope, FaGithub, FaGlobeAsia, FaTwitter } from "react-icons/fa";

interface BlogAvatarProps {
  email: string;
  github: string;
  author: string;
  slogan: string;
  twitter: string;
  avatar: string | StaticImageData;
}

const BlogCard: FunctionComponent<BlogAvatarProps> = ({
  author,
  avatar,
  email,
  github,
  twitter,
  slogan,
}) => {
  return (
    <div className="sticky flex-col items-center px-3 py-5 mb-6 bg-white shadow-lg top-4 hidden lg:flex">
      {/* 頭像 */}
      <div className="w-[120px] h-[120px] border rounded-full overflow-hidden bg-white relative">
        <Image
          src={avatar}
          alt="avatar"
          className="block w-[108px] h-[108px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 object-cover"
        />
      </div>

      <h2 className="py-4 text-2xl font-medium text-center">{author}</h2>

      <p className="mb-6 text-center text-sm text-primary">{slogan}</p>

      <ul className="flex flex-row justify-center pb-4 border-b border-dashed">
        <li>
          <Link
            href={ARCHIVES_URL}
            className="flex flex-col items-center justify-center px-4"
          >
            <span className="text-base font-bold text-zinc-800">{0}</span>
            <span className="text-size-small">文章</span>
          </Link>
        </li>
        <li>
          <Link
            href={CATEGORY_URL}
            className="flex flex-col items-center justify-center px-4 border-l border-r"
          >
            <span className="text-base font-bold text-zinc-800">{0}</span>
            <span className="text-size-small">分類</span>
          </Link>
        </li>
        <li>
          <Link
            href={TAG_URL}
            className="flex flex-col items-center justify-center px-4"
          >
            <span className="text-base font-bold text-zinc-800">{0}</span>
            <span className="text-size-small">標籤</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-row justify-center py-4">
        {github && (
          <li className="flex flex-col items-center justify-center px-4">
            <Link href={github} target="_blank">
              <FaGithub />
            </Link>
          </li>
        )}
        {email && (
          <li className="flex flex-col items-center justify-center px-4">
            <Link href={email} target="_blank">
              <FaEnvelope />
            </Link>
          </li>
        )}
        {twitter && (
          <li className="flex flex-col items-center justify-center px-4">
            <Link href={twitter} target="_blank">
              <FaTwitter />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BlogCard;
