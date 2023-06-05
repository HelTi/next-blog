// import styles from "../styles/Home.module.css";
import { fetchArticles, fetchTopArticles } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";
import ArticleRankingList from "@/components/ArticleRankingList";
import ArticleTags from "@/components/ArticleTags";
import PageFooter from "@/components/PageFooter";
import Link from "next/link";
const pageSize = 10;
export default function Page({ posts, topPosts, currentPage, pageTotal }) {
  const showPreviousButton = currentPage > 1;
  const showNextButton = currentPage < pageTotal;
  return (
    <div className=" flex">
      <div className=" flex-1 border-gray-100">
        <ul className=" p-2.5">
          {posts.map((post) => (
            <ArtilcleListItem post={post} key={post.uuid} />
          ))}
        </ul>
        <div className=" flex items-center justify-between px-4 py-2 text-base text-slate-400">
          {/* 上一页按钮 */}
          {showPreviousButton && (
            <Link href={`/article/page/${currentPage * 1 - 1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          )}
          <span className=" text-base-theme-100">
            {currentPage} / {pageTotal}
          </span>
          {/* 下一页按钮 */}
          {showNextButton && (
            <Link href={`/article/page/${currentPage * 1 + 1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          )}
        </div>
        <PageFooter />
      </div>
      <div className="relative hidden w-4/12 sm:hidden md:block">
        <div className="sticky top-12">
          {/* 推荐文章 */}
          <ArticleRankingList posts={topPosts} />
          {/* 文章标签 */}
          <ArticleTags />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const currentPage = params.num;
  const res = await fetchArticles({ pageSize: pageSize, pageNo: currentPage });
  const topRes = await fetchTopArticles();
  const { data } = res;
  const posts = data?.data || [];
  const { pageTotal = 1 } = data;
  const topPosts = topRes?.data || [];
  // console.log('top',topPosts)
  // console.log("posts", posts);
  return {
    props: {
      posts,
      topPosts,
      currentPage,
      pageTotal,
    },
  };
}
