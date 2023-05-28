import { timeago } from "@/utils/date";
import Link from "next/link";

export default function ArtilcleListItem(props) {
  const { post } = props;
  return (
    <li
      key={post.uuid}
      className=" p-4 mb-2 border-b border-gray-100 bg-white dark:bg-transparent dark:hover:bg-slate-950 dark:border-slate-500"
    >
      <Link href={`/article/detail/${post.uuid}`}>
        <div className=" text-lg font-bold mb-2 dark:text-slate-400">{post.title}</div>
        <div className=" text-gray-700 dark:text-slate-500 text-base font-normal">
          {post.excerpt}
        </div>
        <div>
          <div className="date flex mt-2 text-xs items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="mr-4">发布于{timeago(post.create_time)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>
              {post?.meta?.views}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
