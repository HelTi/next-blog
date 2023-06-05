// import styles from "../styles/Home.module.css";
import { fetchArticles, fetchTopArticles } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";
import ArticleRankingList from "@/components/ArticleRankingList";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import ArticleTags from "@/components/ArticleTags";
import PageFooter from "@/components/PageFooter";
const pageSize = 10;
export default function Home({ posts, topPosts }) {
  const [articles, setArticles] = useState(posts);
  const [pageNo, setPageNo] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (pageNo > 1) {
      getArticles();
    }

    async function getArticles() {
      setLoading(true);
      const res = await fetchArticles({ pageSize: pageSize, pageNo });
      const { data } = res;
      const posts = data?.data || [];
      // 计算是否是最后一页
      if (data.pageNo >= data.pageTotal) {
        setNoData(true);
      }
      if (posts.length) {
        setArticles([...articles, ...posts]);
      } else {
        setNoMoreData(true);
      }
      setLoading(false);
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
        home
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
