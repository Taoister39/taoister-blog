import { BLOG_AUTHOR, BLOG_TITLE } from "@/common/constants/blog";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="cn">
      <Head>
        <meta
          name="description"
          content={`${BLOG_TITLE},歡迎來到我的博客，和我一起交流和學習`}
        />
        <meta
          name="keywords"
          content={`${BLOG_AUTHOR}, Taoister39, Nextjs, React`}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content={BLOG_TITLE} />
      </Head>
      <body className="selection:text-white selection:bg-zinc-700 text-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
