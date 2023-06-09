import {
  ABOUT_URL,
  ARCHIVES_URL,
  CATEGORY_URL,
  HOME_URL,
  TAG_URL,
} from "@/constants/path";
import BlogCard from "@/components/Layout/AsideBar/BlogCard";
import BlogNav from "@/components/Layout/AsideBar/BlogNav";
import { FaArchive, FaHome, FaTags, FaTh, FaUserAlt } from "react-icons/fa";

import taoisterImg from "@/assets/Universe-Taoister.png";
import { getProfileApi } from "@/api/profile";
import { useEffect, useState } from "react";
import { Profile } from "@/types/profile";

function AsideBar() {
  const [profile, setProfile] = useState<Profile>();
  useEffect(() => {
    getProfileApi().then((res) => {
      setProfile(res.data.data);
    });
  }, []);

  return (
    <>
      <BlogNav
        blogTitle="乾坤道長的博客"
        navItems={[
          {
            link: HOME_URL,
            text: "首頁",
            icon: <FaHome className="mr-2 text-zinc-800 text-size-small" />,
          },
          {
            link: CATEGORY_URL,
            text: "分類",
            icon: <FaTh className="mr-2 text-zinc-800 text-size-small" />,
          },
          {
            link: TAG_URL,
            text: "標籤",
            icon: <FaTags className="mr-2 text-zinc-800 text-size-small" />,
          },
          {
            link: ARCHIVES_URL,
            text: "歸檔",
            icon: <FaArchive className="mr-2 text-zinc-800 text-size-small" />,
          },
          {
            link: ABOUT_URL,
            text: "關於",
            icon: <FaUserAlt className="mr-2 text-zinc-800 text-size-small" />,
          },
        ]}
      />
      <BlogCard
        email={profile?.email ?? "Taoister39@outlook.com"}
        github={profile?.github ?? "https://github.com/Taoister39"}
        author={profile?.author ?? "乾坤道長"}
        slogan={profile?.slogan ?? "斗轉星移，萬物乾坤。"}
        twitter={profile?.twitter ?? "https://mobile.twitter.com/Taoister39"}
        avatar={profile?.avatar ?? taoisterImg}
      />
    </>
  );
}

export default AsideBar;
