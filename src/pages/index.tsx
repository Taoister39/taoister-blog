import { IListResponse } from "@/common/types/base";
import { POST_TYPE_ENUM } from "@/common/types/enum";
import { Post } from "@/common/types/post";
import ArticleList from "@/components/Article/ArticleList";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface HomeProps {
  data: IListResponse<Post[]>;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const data: IListResponse<Post[]> = {
    code: 0,
    data: {
      total: 8,
      lists: [
        {
          id: "cldco3pl4000svxbd2huv1gcu",
          title: "依依乐乐",
          categories: [
            {
              id: "clao8p4d3000ivxbdkfs8olip",
              name: "日常分享",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-19T18:04:26.584Z",
              updatedAt: "2022-11-19T18:04:26.584Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "clabccyrk0000vx2mi77bb1rr",
              name: "Windows",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-10T17:25:57.632Z",
              updatedAt: "2022-11-10T17:25:57.632Z",
            },
          ],
          createdAt: "2023-01-26T05:41:34.332Z",
          description: "欢迎欢迎，热烈欢迎",
          view: 7,
        },
        {
          id: "clb84bg04000qvxbdw0w9p3q4",
          title: "搭建go开发环境的一些记录",
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
          type: POST_TYPE_ENUM.ORIGINAL,
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
          createdAt: "2022-12-03T15:57:13.540Z",
          description:
            "今天学习了一下go，记录一下搭建go开发环境时需要注意的问题和在vscode里写go的小技巧",
          view: 27,
        },
        {
          id: "clao8rj2p000mvxbdg98ibrtj",
          title: "辣椒炒面筋",
          categories: [
            {
              id: "clao8p4d3000ivxbdkfs8olip",
              name: "日常分享",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-19T18:04:26.584Z",
              updatedAt: "2022-11-19T18:04:26.584Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "clao8pajl000kvxbdq553nwqp",
              name: "做饭",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-19T18:04:34.594Z",
              updatedAt: "2022-11-19T18:04:34.594Z",
            },
          ],
          createdAt: "2022-11-19T18:06:18.961Z",
          description: "今天吃辣椒炒面筋，哈哈哈~~😍😁😘",
          view: 43,
        },
        {
          id: "claih7myn0000vxieq75gxxxy",
          title: "npm设置国内源",
          categories: [
            {
              id: "claalm5i60000vxr47u7z7v3h",
              name: "开发环境搭建",
              description:
                "收录在搭建开发环境时的记录和遇到的问题，目标是在一个全新的机器上能快速搭建出合适的环境。包括了Linux、Windows、Mac平台",
              isDeleted: 0,
              createdAt: "2022-11-10T04:57:16.638Z",
              updatedAt: "2022-11-10T04:57:16.638Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "cla8i3fh00006vxjcsz5ly1bz",
              name: "npm",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-08T17:43:11.893Z",
              updatedAt: "2022-11-08T17:43:11.893Z",
            },
            {
              id: "cla8i3js20008vxjc7tjv5gty",
              name: "yarn",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-08T17:43:17.474Z",
              updatedAt: "2022-11-08T17:43:17.474Z",
            },
            {
              id: "cla8i3o48000avxjcq7j756xq",
              name: "pnpm",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-08T17:43:23.097Z",
              updatedAt: "2022-11-08T17:43:23.097Z",
            },
          ],
          createdAt: "2022-11-15T17:16:10.367Z",
          description:
            "npm默认的安装源是在国外的，我们可以设置成国内的源加快安装node_modules的速度。可以手动设置，也可以使用nrm这个工具来设置",
          view: 70,
        },
        {
          id: "clafkd22b000avx2mu33lbenr",
          title: "docker compose快速启动PostgresSQL",
          categories: [
            {
              id: "claalm5i60000vxr47u7z7v3h",
              name: "开发环境搭建",
              description:
                "收录在搭建开发环境时的记录和遇到的问题，目标是在一个全新的机器上能快速搭建出合适的环境。包括了Linux、Windows、Mac平台",
              isDeleted: 0,
              createdAt: "2022-11-10T04:57:16.638Z",
              updatedAt: "2022-11-10T04:57:16.638Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "claam0u4b0002vxr4k9bz61ti",
              name: "CentOS7",
              description:
                "CentOS（Community Enterprise Operating System）是Linux发行版之一，它是来自于Red Hat Enterprise Linux（RHEL）依照开放源代码规定发布的源代码所编译而成。CentOS是我最熟悉和喜欢的Linux，我最常用的是第7个大版本，CentOS7.x；",
              isDeleted: 0,
              createdAt: "2022-11-10T05:08:41.724Z",
              updatedAt: "2022-11-10T05:08:41.724Z",
            },
            {
              id: "clabccyrk0000vx2mi77bb1rr",
              name: "Windows",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-10T17:25:57.632Z",
              updatedAt: "2022-11-10T17:25:57.632Z",
            },
            {
              id: "clafk5pmz0008vx2mo7y43r0m",
              name: "Docker",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-13T16:15:20.844Z",
              updatedAt: "2022-11-13T16:15:20.844Z",
            },
          ],
          createdAt: "2022-11-13T16:21:03.539Z",
          description:
            "通过Docker Compose，可以使用 yml文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 yml 文件配置中创建并启动所有服务。这里以快速启动一个PostgresSQL数据为例",
          view: 10,
        },
        {
          id: "clafinfo60006vx2mj6xveole",
          title: "CentOS7使用国内源安装ohmyzsh",
          categories: [
            {
              id: "claalm5i60000vxr47u7z7v3h",
              name: "开发环境搭建",
              description:
                "收录在搭建开发环境时的记录和遇到的问题，目标是在一个全新的机器上能快速搭建出合适的环境。包括了Linux、Windows、Mac平台",
              isDeleted: 0,
              createdAt: "2022-11-10T04:57:16.638Z",
              updatedAt: "2022-11-10T04:57:16.638Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "cla8i4epq000ivxjcfdyylswy",
              name: "Linux",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-08T17:43:57.567Z",
              updatedAt: "2022-11-08T17:43:57.567Z",
            },
            {
              id: "claam0u4b0002vxr4k9bz61ti",
              name: "CentOS7",
              description:
                "CentOS（Community Enterprise Operating System）是Linux发行版之一，它是来自于Red Hat Enterprise Linux（RHEL）依照开放源代码规定发布的源代码所编译而成。CentOS是我最熟悉和喜欢的Linux，我最常用的是第7个大版本，CentOS7.x；",
              isDeleted: 0,
              createdAt: "2022-11-10T05:08:41.724Z",
              updatedAt: "2022-11-10T05:08:41.724Z",
            },
          ],
          createdAt: "2022-11-13T15:33:08.502Z",
          description:
            "在用Linux的时候命令行太丑？命令补全不给力？试试ohmyzsh吧！本文以CentOS7为例，来展示使用国内源安装ohmyzsh，解放你的命令行，让你的命令行更好用",
          view: 9,
        },
        {
          id: "clafgwln40004vx2me1pypucw",
          title: "CentOS7使用nvm来管理和安装Node",
          categories: [
            {
              id: "claalm5i60000vxr47u7z7v3h",
              name: "开发环境搭建",
              description:
                "收录在搭建开发环境时的记录和遇到的问题，目标是在一个全新的机器上能快速搭建出合适的环境。包括了Linux、Windows、Mac平台",
              isDeleted: 0,
              createdAt: "2022-11-10T04:57:16.638Z",
              updatedAt: "2022-11-10T04:57:16.638Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "cla8i3upm000cvxjcd0far3m0",
              name: "Nodejs",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-08T17:43:31.642Z",
              updatedAt: "2022-11-08T17:43:31.642Z",
            },
            {
              id: "claam0u4b0002vxr4k9bz61ti",
              name: "CentOS7",
              description:
                "CentOS（Community Enterprise Operating System）是Linux发行版之一，它是来自于Red Hat Enterprise Linux（RHEL）依照开放源代码规定发布的源代码所编译而成。CentOS是我最熟悉和喜欢的Linux，我最常用的是第7个大版本，CentOS7.x；",
              isDeleted: 0,
              createdAt: "2022-11-10T05:08:41.724Z",
              updatedAt: "2022-11-10T05:08:41.724Z",
            },
          ],
          createdAt: "2022-11-13T14:44:16.913Z",
          description:
            "在开发过程中，不同的项目可能需要用到不同版本的Node。如何快速和方便地切换Node的版本呢？答案是使用nvm",
          view: 23,
        },
        {
          id: "clabcqhpu0002vx2m7ry6jfj9",
          title: "Windows 11和vscode终端美化",
          categories: [
            {
              id: "claalm5i60000vxr47u7z7v3h",
              name: "开发环境搭建",
              description:
                "收录在搭建开发环境时的记录和遇到的问题，目标是在一个全新的机器上能快速搭建出合适的环境。包括了Linux、Windows、Mac平台",
              isDeleted: 0,
              createdAt: "2022-11-10T04:57:16.638Z",
              updatedAt: "2022-11-10T04:57:16.638Z",
            },
          ],
          type: POST_TYPE_ENUM.ORIGINAL,
          tags: [
            {
              id: "cla8ipqz9000kvxjc307plskl",
              name: "Windows Terminal",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-08T18:00:33.237Z",
              updatedAt: "2022-11-08T18:00:33.237Z",
            },
            {
              id: "clabccyrk0000vx2mi77bb1rr",
              name: "Windows",
              description: null,
              isDeleted: 0,
              createdAt: "2022-11-10T17:25:57.632Z",
              updatedAt: "2022-11-10T17:25:57.632Z",
            },
          ],
          createdAt: "2022-11-10T17:36:28.722Z",
          description:
            "作为一个前端摸鱼仔，终端的使用频率是非常高的，一个好看的终端会让我摸鱼更带劲，看这篇文章跟着美化完后，就再也不用对着黑黑的窗口敲命令啦",
          view: 35,
        },
      ],
    },
    message: "success",
  };

  return { props: { data } };
};

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const posts = data.data.lists || [];

  return <ArticleList data={posts} />;
};

export default Home;
