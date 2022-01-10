const { createSideBarConfig } = require('./util')

const MULTITHREAD_PATH = '/blogs/multiThread'
const LINUX_PATH = '/blogs/linux'
const SPRING_PATH = '/blogs/spring'

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
    createSideBarConfig('Linux', LINUX_PATH),
  ],
  [SPRING_PATH]: [
    createSideBarConfig('Spring', SPRING_PATH),
  ]


}