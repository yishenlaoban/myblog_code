const sidebar = require("./siderbar.js");

module.exports = {
    mode: "light",
    subSidebar: "auto",
    valineConfig: {
        appId: "aHK0qkN4cjw1Is9Cqy8Wdkz2-gzGzoHsz",
        appKey: "k35sXUypgk4HGct55SWEk1Ca",
    },
    nav: [{
            text: "主页",
            link: "/",
            icon: "reco-home",
        },
        {
            text: "时间线",
            link: "/timeline/",
            icon: "reco-date",
        },
        {
            text: "Contact",
            icon: "reco-message",
            items: [{
                    text: "GitHub",
                    link: "https://github.com/yishenlaoban",
                    icon: "reco-github",
                },
                {
                    text: "CSDN",
                    link: "https://blog.csdn.net/m0_51302110?spm=1000.2115.3001.5343",
                    icon: "reco-csdn",
                },
            ],
        },
    ],
    sidebar,
    type: "blog",
    blogConfig: {
        category: {
            location: 2,
            text: "目录索引",
        },
        tag: {
            location: 3,
            text: "标签索引",
        },
    },
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "yishenlaoban",
    authorAvatar: "/avatar.jpg",
    record: "牛掰格拉斯",
    startYear: "2022",
}