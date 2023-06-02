import { BLOG_AUTHOR } from "@/common/constants/blog";
import { IListResponse, IResponse } from "@/common/types/base";
import { POST_TYPE_ENUM } from "@/common/types/enum";
import { Post } from "@/common/types/post";
import { Profile } from "@/common/types/profile";
import ArticleAttributes from "@/components/Article/ArticleAttributes";
import ArticleTitle from "@/components/Article/ArticleTitle";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import "md-editor-rt/lib/style.css";
import MdEditor from "md-editor-rt";
import { formatTime } from "@/utils/time";

interface ArticleDetailProps {
  data: IResponse<Post>;
  profile: IResponse<Profile>;
}

interface ArticleDetailParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  ArticleDetailProps,
  ArticleDetailParams
> = async () => {
  const data: IResponse<Post> = {
    code: 0,
    data: {
      id: "clb84bg04000qvxbdw0w9p3q4",
      title: "搭建go开发环境的一些记录",
      description:
        "今天学习了一下go，记录一下搭建go开发环境时需要注意的问题和在vscode里写go的小技巧",
      content:
        '## 1. 安装完go的SDK后，需要设置proxy国内镜像\n\n在开发中难免会需要安装第三方的包，然而`go`默认的安装第三方包的源在国外，国内访问非常慢甚至无法访问。这个时候我们可以设置`GOPROXY`为国内的源，安装包的速度起飞🛫\n\n在终端执行下面命令，设置`GOPROXY`为国内的源\n\n```powershell\ngo env -w GOPROXY=https://goproxy.cn,direct\n```\n\n## 2. vscode安装go插件\n\n安装下面这个插件，让`vscode`支持`go`开发，还可以为`.go`文件提供语法高亮和一些其他的功能\n\n![go插件](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/ylPOimage.png)\n\n第一次在`vscode`里编写`go`文件时，在`vscode`的右下角会有很多提示，让你安装一些包，直接点`Install All`（注意：需要设置`GOPROXY`为国内的源，要不然下载非常慢）\n\n### 2.1  vscode写go小技巧\n\n在安装完go插件后，插件会给我们提供一些代码块(Snippet)，可以减少我们编写一些重复的代码\n\n- 输入`fp`，然后按`tab`能快速打出`fmt.Println("")`\n\n![fp snippet](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/kGA1image.png)\n\n- 输入`pkgm`，然后按`tab`能快速声明main包和打出`main`函数\n\n![pkgm snippet](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/-cbiimage.png)\n\n- 快速打印变量，在任意变量后面加`.print`然后按`tab`\n\n![print snippet](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/8eHXimage.png)\n\n以上图`num`变量为例，在`num`变量后面`.print`然后按`tab`，可以快速打印`num`变量，输出的语句是`fmt.Printf("num: %v\\n", num)`\n\n![print num](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/d9ZYimage.png)\n\n## 3. vscode安装Code Runner插件\n\n`Code Runner`插件可以帮助我们快速执行`go`文件，只需要点一下按钮（或者使用快捷键`Ctrl+Alt+N`）就能执行，不用再在命令行里去`go build`或`go run`了\n\n![Code Runner](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/5eM4image.png)\n\n![执行](https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/FYaOimage.png)\n\n\n\n\n',
      view: 29,
      type: POST_TYPE_ENUM.ORIGINAL,
      isDeleted: 0,
      isPublished: 1,
      createdAt: "2022-12-03T15:57:13.540Z",
      updatedAt: "2023-04-02T11:38:57.260Z",
      publishedAt: "2023-04-02T11:38:57.260Z",
      categories: [
        {
          id: "cla8i2hm40004vxjc8nv6qure",
          name: "后端技术",
          description: "后端技术相关分类",
          isDeleted: 0,
          createdAt: "2022-11-08T17:42:28.013Z",
          updatedAt: "2022-11-08T17:42:28.013Z",
        },
      ],
      tags: [
        {
          id: "clb832ugg000ovxbd9pte35ho",
          name: "go",
          description: null,
          isDeleted: 0,
          createdAt: "2022-12-03T15:22:32.656Z",
          updatedAt: "2022-12-03T15:22:32.656Z",
        },
      ],
    },
    message: "success",
  };
  const profile: IResponse<Profile> = {
    code: 0,
    data: {
      id: "claa0vvig0000vx5oelqnpdzp",
      author: "F西",
      avatar:
        "https://nestjs-blog-1306920856.cos.ap-shanghai.myqcloud.com/avatar.jpg",
      slogan: "多学习！多总结！多输出！",
      github: "https://github.com/aifuxi",
      email: "aifuxi.js@gmail.com",
      site: "http://aifuixi.cool",
      createdAt: "2022-11-09T19:16:58.312Z",
      updatedAt: "2022-11-10T04:51:25.432Z",
    },
    message: "success",
  };

  return {
    props: {
      data,
      profile,
    },
  };
};

const ArticleDetailPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, profile }) => {
  const post = data.data;
  const author = BLOG_AUTHOR;
  return (
    <div className="space-y-2">
      <Head>
        <title>
          {author}的博客-{post.title}
        </title>
      </Head>

      <ArticleTitle title={post.title} />

      <ArticleAttributes item={post} />

      <MdEditor modelValue={post.content} previewOnly />

      <div className="flex justify-center pt-10 text-xs text-secondary">
        —— <span className="mx-2">最后更新于{formatTime(post.updatedAt)}</span>
        ——
      </div>
    </div>
  );
};

export default ArticleDetailPage;
