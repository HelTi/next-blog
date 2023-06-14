import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { articelDetail, fetchArticles, fetchViewArticle } from "@/services";
import { timeago } from "@/utils/date";
import dayjs from "dayjs";
import Head from "next/head";
import { useEffect } from "react";

export default function ArticleDetail({ post,id }) {

  useEffect(()=>{
     viewArtile()
     function viewArtile(){
       fetchViewArticle(id)
     }
  },[])
  return (
    <div className=" flex dark:text-white">
      <Head>
        <title>
        {post.title}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="article-detail w-0 flex-1 p-4">
        <h2 className=" mb-4 text-3xl  font-bold dark:text-slate-500">
          {post.title}
        </h2>
        <div className="article-intro mb-4 flex items-center text-sm text-gray-500">
          <div className=" flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            发布时间:
            <span className=" ml-2 flex items-center">
              {dayjs(post.create_time).format("YYYY-MM-DD")}
            </span>
          </div>
        </div>
        <div
          className="prose prose-slate dark:prose-invert prose-a:text-blue-600 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
      <div className=" relative hidden w-4/12 sm:hidden md:block">
        <div className="navgation sticky top-12">
          <div className=" text-md mb-1 flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            文章目录
          </div>
          <MarkdownNavbar source={post.markdown} ordered={false} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetchArticles();
  const posts = res?.data?.data || [];
  const paths = posts.map((post) => ({
    params: { id: post.uuid },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await articelDetail(id);
  const post = res.data;
  return { props: { post, id } };
}
