#!/bin/bash

echo "拉取代码..."
git reset --hard origin/main
git clean -f
git pull
git checkout main
echo "开始安装依赖..."
npm install
echo "依赖安装结束..."
echo "开始构建..."
npm run build
echo "构建sitemap"
npm run sitemap
echo "构建结束 开始启动服务"
pm2 restart blog-static
echo "服务重启完毕."