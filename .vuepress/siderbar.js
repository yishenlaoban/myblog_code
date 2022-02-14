const { createSideBarConfig } = require('./util')

const MULTITHREAD_PATH = '/blogs/multiThread'
const LINUX_PATH = '/blogs/linux'
const FRAME_PATH = '/blogs/frame'
const JAVA_PATH = '/blogs/java'


module.exports = {
    // [JAVASCRIPT_PATH]: [
    //   createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    //   createSideBarConfig('JS-深入数组', JAVASCRIPT_PATH + '/js-array'),
    //   createSideBarConfig('JS-其它API原理', JAVASCRIPT_PATH + '/js-api'),
    //   createSideBarConfig('JS-V8引擎原理', JAVASCRIPT_PATH + '/js-v8'),
    //   createSideBarConfig('JS-异步I/O及异步编程', JAVASCRIPT_PATH + '/js-async'),
    // ],
    // [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
    // [NET_PATH]: [
    //   createSideBarConfig("TCP 协议", NET_PATH + '/tcp'),
    //   createSideBarConfig("HTTP 协议", NET_PATH + '/http')
    // ],
    // [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
    // [INTERVIEW_PATH]: [createSideBarConfig('面试经历', INTERVIEW_PATH)],
    // [BROWSER_PATH]: [
    //   createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
    //   createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
    // ],
    [MULTITHREAD_PATH]: [
        createSideBarConfig('Java多线程', MULTITHREAD_PATH + '/Java多线程'),
        createSideBarConfig('JUC', MULTITHREAD_PATH + '/JUC'),
    ],
    [LINUX_PATH]: [
        createSideBarConfig('Linux', LINUX_PATH + '/linux基础'),
        createSideBarConfig('Redis', LINUX_PATH + '/Redis'),
    ],
    [FRAME_PATH]: [
        createSideBarConfig('Spring', FRAME_PATH + '/spring'),
        createSideBarConfig('Jbolt', FRAME_PATH + '/jfinal/jbolt'),
        createSideBarConfig('Jfinal', FRAME_PATH + '/jfinal/jfinal框架学习'),

    ],
    [JAVA_PATH]: [
        createSideBarConfig('JavaWeb', JAVA_PATH + '/JavaWeb'),
        createSideBarConfig('Java高级', JAVA_PATH + '/Java高级'),
        createSideBarConfig('Java8新特性', JAVA_PATH + '/Java8新特性'),
    ]


}