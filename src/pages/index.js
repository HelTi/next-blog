import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { fetchArticles, fetchTopArticles } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";
import ArticleRankingList from "@/components/ArticleRankingList";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
const pageSize = 10;
export default function Home({ posts, topPosts }) {
  const [articles, setArticles] = useState(posts);
  const [pageNo, setPageNo] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (pageNo > 1) {
      getArticles();
    }

    async function getArticles() {
      setLoading(true)
      const res = await fetchArticles({ pageSize: pageSize, pageNo });
      const posts = res?.data?.data || [];
      if (posts.length) {
        setArticles([...articles, ...posts]);
      } else {
        setNoMoreData(true);
      }
      setLoading(false)
    }
  }, [pageNo]);

  const onLoadNextPageData = () => {
    if (noMoreData) {
      alert("没有更多数据了！");
    } else {
      setPageNo(pageNo + 1);
    }
  };
  return (
    <div className=" flex">
      <Head>
        <title>博客</title>
        <link rel="icon" href="/helogo.png" />
      </Head>
      <div className=" flex-1 border-gray-100">
        <ul className=" p-2.5">
          {articles.map((post) => (
            <ArtilcleListItem post={post} key={post.uuid} />
          ))}
        </ul>
        <Button  onClick={onLoadNextPageData} loading={loading}>加载更多</Button>
      </div>
      <div className="relative hidden w-4/12 sm:hidden md:block">
        {/* 推荐文章 */}
        <ArticleRankingList posts={topPosts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchArticles({ pageSize: pageSize });
  const topRes = await fetchTopArticles();
  const posts = res?.data?.data || [];
  const topPosts = topRes?.data || [];
  // console.log('top',topPosts)
  // console.log("posts", posts);
  return {
    props: {
      posts,
      topPosts,
    },
  };
}
