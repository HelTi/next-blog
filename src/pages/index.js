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
      console.log('res data',res,data,posts)
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
      <div className=" flex-1 border-gray-100">
        <ul className=" p-2.5">
          {articles.map((post) => (
            <ArtilcleListItem post={post} key={post.uuid} />
          ))}
        </ul>
        <Button
          onClick={onLoadNextPageData}
          disabled={noData}
          loading={loading}
        >
          {noData ? "没有更多了" : "加载更多"}
        </Button>
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
