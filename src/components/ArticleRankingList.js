import Link from "next/link";

export default function ArticleRankingList({ posts = [] }) {
  return (
    <div className="max-md border-b border-gray-100 p-4 dark:border-none dark:border-slate-500">
      <ul>
        {posts.map((post, index) => (
          <li className="mb-3 flex items-center" key={index}>
            <span className=" mr-2 h-5 w-5 bg-slate-100 text-center text-xs leading-5 dark:bg-base-theme-100 dark:text-white">
              {index + 1}
            </span>
            <Link
              className=" w-0 flex-1 truncate text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
              href={`/article/detail/${post.uuid}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
