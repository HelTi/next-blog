import { fetchTags } from "@/services";
import { useEffect, useState } from "react";

export default function ArticleTags() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const getTags = async () => {
      const res = await fetchTags();
      console.log("res", res);
      const { data } = res;
      if (data?.length) {
        setTags(data);
      }
    };
    getTags();
  }, []);

  const TasItem = (props) => {
    return (
      <div className="tags-item mb-2 mr-2 overflow-hidden flex items-center rounded-md bg-slate-100 dark:bg-slate-700 text-sm text-gray-500 drop-shadow-sm backdrop-blur-sm hover:drop-shadow-lg">
        <div className=" bg-slate-50 overflow-hidden p-2 dark:bg-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-5 w-5 text-base-theme  dark:text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
        </div>
       <div className="p-2">
       {props.name}
        <span className="ml-1">[{props.articleCount}]</span>
       </div>
      </div>
    );
  };

  return (
    <div className="max-md border-gray-100 p-4 dark:border-none dark:border-slate-500">
      <div className="tags-inner flex flex-wrap">
        {tags.map((tag) => {
          return (
            <TasItem
              name={tag.name}
              key={tag._id}
              articleCount={tag.articleCount}
            />
          );
        })}
      </div>
    </div>
  );
}
