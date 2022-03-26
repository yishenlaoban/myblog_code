const themeConfig = require("./themeConfig.js");
const plugins = require("./plugins.js");

module.exports = {
    host: "0.0.0.0", // 生成网页地址（本地调试使用）
    port: "8088", // 生成网页端口（本地调试使用）
    title: "升升狠のBlog",
    description: "看清生活的本质，依旧热爱生活 。",
    dest: "public",
    base: '/my_blog/',
    // base: "/",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/favicon.ico",
            },
        ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ],
    ],
    plugins,
    theme: "reco",
    themeConfig,
    markdown: {
        lineNumbers: true,
    },
};