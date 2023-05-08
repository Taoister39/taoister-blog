import { BLOG_TITLE } from "@/common/constants/blog";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }
  }, []);

  return (
    <>
      <Head>
        <title>{BLOG_TITLE}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
