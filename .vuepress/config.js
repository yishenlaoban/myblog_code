const themeConfig = require("./themeConfig.js");
const plugins= require("./plugins.js");

module.exports = {
  title: "升升狠のBlog",
  description: "看清生活的本质依旧热爱。",
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
