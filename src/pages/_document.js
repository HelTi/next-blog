import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var _hmt = _hmt || [];(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?efa73e07deb6bf9fe2148b7c6c6134f8";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
          }}
        ></script>
      </Head>
      <body className=" bg-gray-10 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
