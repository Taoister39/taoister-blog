import { HOME_URL } from "@/constants/path";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import { useRouter } from "next/router";

interface NavItem {
  link: string;
  text: string;
  icon: ReactNode;
}

interface BlogNavProps {
  blogTitle: string;
  navItems: NavItem[];
}

const BlogNav: FC<BlogNavProps> = ({ blogTitle, navItems }) => {
  const router = useRouter();
  const { pathname } = router;
  const [isMenu, setIsMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <div className="w-full mb-6 bg-white shadow-lg">
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center px-4 bg-zinc-800 lg:static">
        <FaBars
          className="mr-4 text-3xl text-white cursor-pointer lg:hidden"
          onClick={handleToggleMenu}
        />
        <Link
          href={HOME_URL}
          className="flex-1 text-white py-6 text-2xl font-medium text-center "
        >
          <h1>{blogTitle}</h1>
        </Link>
      </div>

      <nav>
        <ul
          className={classNames(
            "lg:h-full fixed top-20 lg:static left-0 right-0 z-50 lg:flex lg:flex-col py-4 bg-white lg:shadow-none",
            {
              "shadow-x1": isMenu,
              hidden: !isMenu,
            }
          )}
        >
          {navItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="flex items-center justify-start h-10 px-4 bg-white text-sm hover:bg-zinc-100"
              >
                {item.icon}
                <span
                  className={classNames(
                    "flex-1 inline-flex items-center h-full",
                    {
                      "font-semibold": pathname === item.link,
                    }
                  )}
                >
                  {item.text}
                </span>
                <span
                  className={classNames("w-2 h-2 rounded-full", {
                    "bg-orange-400": pathname == item.link,
                  })}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BlogNav;
