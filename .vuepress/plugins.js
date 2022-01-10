module.exports =  [
    "@vuepress-reco/vuepress-plugin-comments",
    [
      'cursor-effects',  //点击效果
      {
         size: 2, // size of the particle, default: 2
         shape: ['star'], // shape of the particle, default: 'star'
         zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
   ],
   [
    'ribbon',  //丝带背景效果
    {
       size: 90, // width of the ribbon, default: 90
       opacity: 0.8, // opacity of the ribbon, default: 0.3
       zIndex: -1, // z-index property of the background, default: -1
    },
   ],
   [
       "vuepress-plugin-nuggets-style-copy",
        {
            copyText: "复制代码",
            tip: {
                 content: "复制成功!"
            }
        }
   ],
   [
    'meting',
    {
       // 这个 API 是不可用的，只是作为示例而已
    //    metingApi: 'https://api.injahow.cn/meting/',
       meting: {
        //   server: 'netease',
        //   type: 'playlist',
        //   mid: '6838211960',
        auto: 'https://music.163.com/#/playlist?id=100524452'
       }, // 不配置该项的话不会出现全局播放器

       aplayer: {
            // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded:false,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          order: 'random',
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
        //   lrcType: 0,
          lrcType: 3,
        },
        mobile :{
            // 手机端去掉cover图
            cover: false,
        }

    },
   ],

]