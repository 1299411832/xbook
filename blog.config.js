// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', // API默认请求地址,可以配置成自己的地址例如：https://[xxxxx].notion.site/api/v3
  // Important page_id！！！Duplicate Template from  https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'claude', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 claude,endspace,example,fukasawa,fuwari,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2026, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新缓存间隔 单位(秒)；即每个页面有60秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN || '', // On-Demand Revalidation Token，设置后可通过 POST /api/revalidate 立即刷新页面缓存（解决 Notion 内容更新延迟问题）
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '观棋marketing', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '专注流量增长，贯彻营销底层逻辑……，更多内容在同名公众号「观棋marketing」上', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://billow.icu', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '营销,市场营销,内容营销,数字营销,数字化营销,网络营销,线上营销,整合营销,品牌营销,营销策略,营销方案,营销策划,营销推广,营销渠道,新媒体营销,全渠道营销,内容营销是什么,内容营销的定义,内容营销策略,内容营销案例,内容营销怎么做,内容营销方法论,内容营销工具,内容营销公司,内容营销服务,内容营销策划方案,内容矩阵,内容矩阵搭建,内容运营,内容运营怎么做,内容规划,内容日历,内容排期,干货内容营销,故事化营销,品牌故事营销,UGC内容营销,用户生成内容,爆款内容,爆款文案,内容种草,种草营销,品牌内容化,内容变现,数字营销策略,网络推广,全网营销,精准营销,精准获客,私域营销,私域流量,私域运营,公域流量,公域引流,获客渠道,低成本获客,增长黑客,用户增长,用户画像,用户分层,转化率优化,营销自动化,小程序营销,H5营销,落地页优化,社交媒体营销,社媒营销,微博营销,微信公众号运营,小红书营销,小红书种草,小红书运营,抖音营销,抖音运营,抖音投放,快手营销,视频号运营,B站营销,知乎营销,社群营销,社群运营,朋友圈营销,达人营销,KOL营销,网红营销,素人营销,直播营销,直播带货,互动营销,话题营销,SEO优化,SEO优化教程,关键词优化,关键词排名,网站SEO,站内优化,站外优化,搜索引擎营销,SEM,竞价推广,百度推广,谷歌广告,信息流广告,效果广告,白帽SEO,黑帽SEO,SEO关键词布局,长尾关键词,外链建设,搜索引擎收录,网站权重提升,本地SEO,文案营销,软文营销,软文推广,视频营销,短视频营销,图文营销,音频营销,播客营销,电子书营销,白皮书营销,海报营销,长图营销,信息图营销,案例营销,客户案例,行业报告营销,邮件营销,EDM营销,品牌推广,品牌策划,品牌定位,品牌建设,品牌升级,品牌传播,品牌曝光,品牌声量,差异化营销,情感营销,情怀营销,借势营销,热点营销,节日营销,跨界营销,IP营销,事件营销,体验式营销,会员营销,忠诚度计划,病毒营销,裂变营销,饥饿营销,稀缺营销,场景营销,沉浸式营销,营销推广怎么做,内容营销有哪些形式,内容营销和广告营销的区别,中小企业如何做内容营销,B2B内容营销怎么做,内容营销如何做用户增长,内容营销KPI怎么定,内容营销ROI如何衡量,新手如何入门内容运营,内容营销岗位职责,营销策划案怎么写,营销方案模板,线上营销推广方法有哪些,品牌如何做私域运营,公众号涨粉技巧,小红书笔记怎么写才火,抖音起号方法,抖音如何快速涨粉,短视频脚本怎么写,直播带货话术,客户转化率低怎么办,获客成本高的原因,2026年营销趋势,营销行业报告,营销公司,内容营销代运营,新媒体代运营,跨境电商营销,海外营销,出海营销,外贸营销,餐饮营销,教育行业营销,美妆营销,电商营销,医疗营销,B2B营销', // 网站关键词 英文逗号隔开
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 备案查询链接，如果用了萌备等备案请在这里填写
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', // 公安备案号，例如 '浙公网安备3xxxxxxxx8号'

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能

  // 其它复杂配置
  // 原配置文件过长，且并非所有人都会用到，故此将配置拆分到/conf/目录下, 按需找到对应文件并修改即可
  ...require('./conf/comment.config'), // 评论插件
  ...require('./conf/contact.config'), // 作者联系方式配置
  ...require('./conf/post.config'), // 文章与列表配置
  ...require('./conf/analytics.config'), // 站点访问统计
  ...require('./conf/image.config'), // 网站图片相关配置
  ...require('./conf/font.config'), // 网站字体
  ...require('./conf/right-click-menu'), // 自定义右键菜单相关配置
  ...require('./conf/code.config'), // 网站代码块样式
  ...require('./conf/animation.config'), // 动效美化效果
  ...require('./conf/widget.config'), // 悬浮在网页上的挂件，聊天客服、宠物挂件、音乐播放器等
  ...require('./conf/ad.config'), // 广告营收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引
  ...require('./conf/ai.config'), // AI 相关配置（AI摘要、AI聊天机器人等）
  ...require('./conf/performance.config'), // 性能优化配置
  ...require('./conf/top-tag.config'), // 置顶文章全局配置

  // 高级用法
  ...require('./conf/layout-map.config'), // 路由与布局映射自定义，例如自定义特定路由的页面布局
  ...require('./conf/notion.config'), // 读取notion数据库相关的扩展配置，例如自定义表头
  ...require('./conf/dev.config'), // 开发、调试时需要关注的配置

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu类型的菜单，替代了3.12版本前的Page类型

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容，默认允许；可被文章属性 CAN_COPY / ext.CAN_COPY 覆盖。

  ...require('./conf/techgrow.config'), // 公众号导流插件（TechGrow）

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语打字效果,Hexo,Matery主题支持, 英文逗号隔开多个欢迎语。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  // 欢迎语打字效果类型速度
  GREETING_WORDS_TYPE_SPEED:
    process.env.NEXT_PUBLIC_GREETING_WORDS_TYPE_SPEED || 200,

  // 欢迎语打字效果回退速度
  GREETING_WORDS_BACK_SPEED:
    process.env.NEXT_PUBLIC_GREETING_WORDS_BACK_SPEED || 100,

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
