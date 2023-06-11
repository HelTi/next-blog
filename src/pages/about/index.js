export default function About() {
  return (
    <>
      <div className=" mt-2 flex  rounded-md bg-white/60 p-4 drop-shadow-md backdrop-blur-sm dark:bg-slate-950">
        <div className=" w-80 p-4 ">
          <div className=" mx-auto h-24 w-24">
            <img
              className=" rounded-full"
              src="/images/l.png"
              style={{
                width: "100%",
              }}
            />
          </div>
          <p className=" mt-4 text-center text-lg text-base-theme">Long</p>
          <p className=" mt-4 text-center text-base text-base-theme-100 antialiased">
            长风破浪会有时，直挂云帆济沧海
          </p>
        </div>
        <div className=" flex-1 p-2">
          <div className=" mb-4">
            <h2 className=" mb-2 text-base text-base-theme">关于博客</h2>
            <p className=" text-sm text-gray-400">
              这是一个基于个人学习总结的博客
            </p>
          </div>
          <div className="mb-4">
            <h2 className=" mb-2 text-base text-base-theme">更多</h2>
            <div className="content flex">
              <div className=" mr-4 w-32 rounded-md bg-white/80 p-2 text-base-theme drop-shadow-sm backdrop-blur-sm hover:drop-shadow-lg">
                <a href="https://github.com/HelTi">
                  <div className=" flex items-center">
                    <svg
                      viewBox="0 0 16 16"
                      className="mr-4 h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                      data-immersive-translate-effect="1"
                      data-immersive-translate-mark="1"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    Github
                  </div>
                </a>
              </div>
              <div className=" w-32 rounded-md bg-white/80 p-2 text-base-theme drop-shadow-sm backdrop-blur-sm hover:drop-shadow-lg">
                <a href="mailto:helti@qq.com">
                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="mr-4 h-5 w-5"
                      aria-hidden="true"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    邮箱
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            {/* <img className=" rounded-md"  src="https://github-readme-activity-graph.vercel.app/graph?username=HelTI&bg_color=050505&color=c3b1b1&line=535053&point=7e7c7c&area=true&hide_border=true" /> */}
            <img className=" rounded-md" src="https://github-readme-activity-graph.vercel.app/graph?username=HelTI&bg_color=ffffff&color=c3b1b1&line=ceb6b9&point=c7b3b3&area=true&hide_border=true" />
          </div>
        </div>
      </div>
    </>
  );
}
