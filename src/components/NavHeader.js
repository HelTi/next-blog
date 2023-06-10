import { storage } from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavHeader() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const toggleThemeDark = () => {
    const theme = storage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      storage.setItem("theme", "light");
    } else {
      storage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 阻止默认的表单提交行为
      // 执行搜索逻辑
      console.log("searchTerm", searchTerm);
      handleSearch();
    }
  };

  const handleSearch = () => {
    const searchUrl = `/article/search?title=${encodeURIComponent(
      searchTerm
    )}`;
    router.replace(searchUrl);
  };

  return (
    <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-slate-50 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="nav-header container mx-auto flex h-12 max-w-5xl items-center justify-between">
        <div>
          <Link href={"/"}>
            <img className=" h-8" src="/helogo.png" />
          </Link>
        </div>
        <div className="relative ml-auto hidden items-center lg:flex">
          <nav className="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-200">
            <ul className="flex items-center space-x-8">
              <li>
                <div>
                  <form className="group relative">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-base-theme group-focus-within:text-base-theme"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                    <input
                      className=" w-60 appearance-none rounded-md py-2 pl-10 text-xs text-base-theme placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-base-theme  dark:ring-black"
                      type="text"
                      aria-label="请输入搜索内容"
                      placeholder="请输入搜索内容"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      onKeyPress={handleKeyPress}
                    ></input>
                  </form>
                </div>
              </li>
              <li>
                <Link
                  className=" hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400"
                  href={"/article/page/1"}
                >
                  文章
                </Link>
              </li>
              <li>
                <Link
                  className=" hover:text-blue-400 dark:text-slate-400  dark:hover:text-blue-400"
                  href={"/about"}
                >
                  关于
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
            <div className="btn" onClick={toggleThemeDark}>
              <span className="cursor-pointer dark:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6  fill-base-theme stroke-base-theme-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </span>

              <span className="hidden cursor-pointer dark:inline dark:text-slate-400 dark:hover:text-slate-300">
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
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </span>
            </div>

            <a
              className="ml-6 block cursor-pointer text-base-theme hover:text-base-theme-100 dark:text-slate-400 dark:hover:text-slate-300"
              href="https://github.com/HelTi"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
                data-immersive-translate-effect="1"
                data-immersive-translate-mark="1"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
