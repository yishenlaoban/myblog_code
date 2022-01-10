#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
# git remote add origin https://github.com/sanyuan0704/my_blog.git
git remote add origin https://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@github.com/yishenlaoban/my_blog.git

git push -f origin  master:master
# git push -f https://github.com/yishenlaoban/myBlog.git master

cd ..

tcb hosting:deploy public -e blog-9g8lgnuke4603ff9
