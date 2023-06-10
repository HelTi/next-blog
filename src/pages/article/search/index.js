import { fetchTopArticles, search } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";
import ArticleRankingList from "@/components/ArticleRankingList";
import ArticleTags from "@/components/ArticleTags";
import PageFooter from "@/components/PageFooter";

const ArticleSearchPage = ({ noSearchParams, posts, topPosts, count }) => {
  return (
    <div className=" flex">
      <div className=" flex-1 border-gray-100">
        <div>
          <p className=" pl-2 mt-4 text-gray-400">
            共 <i className=" text-base-theme">{count} </i>条搜索结果
          </p>
        </div>
        {!noSearchParams && (
          <>
            <ul className=" p-2.5">
              {posts.map((post) => (
                <ArtilcleListItem post={post} key={post.uuid} />
              ))}
            </ul>
            {posts.length === 0 && (
              <div className=" mt-5 flex justify-center p-5 text-base-theme-100">
                没有搜到相关文章
              </div>
            )}
          </>
        )}
        {noSearchParams && (
          <div className=" mt-5 flex justify-center p-5 text-base-theme-100">
            没有数据可以提供
          </div>
        )}
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
};

export async function getServerSideProps(context) {
  const { title = "", tag = "" } = context.query;
  let articles = [];
  let count = 0;
  let pageTotal = 1;
  let noSearchParams = false;

  // 在这里可以进行根据路由参数的异步数据获取或处理
  const params = {
    page: 1,
    tag: tag ? tag : null,
    title: title ? title : null,
  };

  const topRes = await fetchTopArticles();
  const topPosts = topRes?.data || [];

  if (!tag && !title) {
    noSearchParams = true;
  } else {
    const { data } = await search(params);
    console.log("search data", data);
    articles = data.data;
    count = data.count;
    pageTotal = data.pageTotal;
  }

  return {
    props: {
      title,
      tag,
      posts: articles,
      count: count,
      noSearchParams,
      pageTotal,
      topPosts,
    },
  };
}

export default ArticleSearchPage;
