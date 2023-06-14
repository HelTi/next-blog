import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";
import DefaultLayout from "@/components/layout";
import NavHeader from "@/components/NavHeader";
// import PageFooter from "@/components/PageFooter";
import { useEffect } from "react";
import { storage } from "@/utils/local-storage";
import Head from "next/head";
import { fetchSaveVistor } from "@/services";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || DefaultLayout;
  const router = useRouter();
  useEffect(() => {
    const theme = storage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // 初始化请求一次
    saveVistorInfo()

    const handleRouteChange = (url) => {
      saveVistorInfo();
    };
    
    // 监听路由变化
    router.events.on("routeChangeComplete", handleRouteChange);

    function saveVistorInfo() {
      fetchSaveVistor({
        route_path: window.location.href,
      });
    }

    // 在组件卸载时取消监听
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
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
