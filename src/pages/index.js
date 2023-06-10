// import styles from "../styles/Home.module.css";
import RootLayout2 from "@/components/layout2";
import TypingEffect from "@/components/TypingEffect";
import { fetchLatestArticle } from "@/services";
import Link from "next/link";
import { useState } from "react";
export default function Home({ latestPost }) {
  const [text, setText] = useState('Building a better world with love and peace.')
  return (
    <div className="home">
      <div className="relative mx-auto max-w-5xl pt-20 sm:pt-24 lg:pt-32">
        <div className=" text-base-theme text-5xl text-center antialiased font-medium">
          <TypingEffect text={text} />
        </div>
        <div className=" mt-12 flex items-center justify-center text-base-theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <p className=" mt-4 text-center text-base text-base-theme-100 antialiased hover:text-base-theme">
          <Link href={`/article/detail/${latestPost.uuid}`}>
          {latestPost.title}
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetchLatestArticle()
  const {data=[]} = res
  const latestPost = data[0]
  console.log('latestPost',latestPost)
  return {
    props: {
      latestPost
    },
  };
}

Home.layoutProps = {
  Layout: RootLayout2
}
