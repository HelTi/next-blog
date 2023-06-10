import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";
import DefaultLayout from "@/components/layout";
import NavHeader from "@/components/NavHeader";
import PageFooter from "@/components/PageFooter";
import { useEffect } from "react";
import { storage } from "@/utils/local-storage";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || DefaultLayout;
  useEffect(() => {
    const theme = storage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <>
      <Head>
        <title>long的博客</title>
        <link rel="icon" href="/helogo.png" />
      </Head>
      <NavHeader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
