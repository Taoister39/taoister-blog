import AsideBar from "@/components/Layout/AsideBar";
import BlogCard from "@/components/Layout/AsideBar/BlogCard";
import Footer from "@/components/Layout/Footer";
import { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-white lg:bg-zinc-50">
      <main className="flex flex-col-reverse lg:justify-between lg:flex-row lg:mx-auto lg:w-[1120px]">
        {/* 主體內容 */}
        <section className="lg:w-[815px] min-h-screen bg-white lg:shadow-lg lg:p-10 lg:mr-6 pt-20 px-6">
          {children}
        </section>

        {/* 側邊欄 */}
        <aside className="lg:w-[260px] w-full flex flex-col">
          <AsideBar />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
