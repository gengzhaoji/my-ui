import demoblock from 'vitepress-theme-demoblock';

export default {
    title: 'my-ui',
    description: '此框架使用与二次开发，前端框架使用vue，UI框架使用element-plus，全局数据状态管理使用pinia，ajax使用库为axios。用于快速搭建中后台页面。',
    lang: 'en-cn',
    lastUpdated: true,
    hmr: { overlay: false },
    // 生成html的head配置：站点favicon...
    head: [
        ['meta', { name: 'keywords', content: 'vite vue element 后台管理系统' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico',
            },
        ],
        // 统计代码
        ['script', { src: 'https://hm.baidu.com/hm.js?3a995a34b126c8652c75166fa2690df9' }],
        // 百度推送代码
        ['script', { src: '/push.js' }],
    ],
    themeConfig: {
        // 展示搜索框
        algolia: {
            appKey: '',
            indexName: '',
            searchParameters: {
                faeFilters: ['tags:guide,api'],
            },
        },
        // 头部导航
        nav: [
            { text: '菜单配置', link: '/menu/', activeMatch: '/menu/' },
            { text: '权限配置', link: '/power/', activeMatch: '/power/' },
            { text: 'Gitlab', link: 'http://192.168.1.16:9980/fe/my-ui' },
        ],
        // 侧边栏
        sidebar: [
            {
                text: '基础',
                items: [
                    {
                        text: '安装',
                        link: '/installation',
                    },
                    {
                        text: '快速开始',
                        link: '/quickstart',
                    },
                    {
                        text: '文件配置',
                        link: '/configuration',
                    },
                    {
                        text: '代码生成器',
                        link: '/coder',
                    },
                    {
                        text: '自定义代码片段',
                        link: '/page',
                    },
                ],
            },
            {
                text: '基础组件',
                items: [
                    {
                        text: 'myButton 按钮',
                        link: '/guide/myButton',
                    },
                    {
                        text: 'myTable 表格',
                        link: '/guide/myTable',
                    },
                ],
            },
        ],
        lineNumbers: true,
        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2022-present Evan You',
        // },
    },
    markdown: {
        config: (md) => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            const { demoBlockPlugin } = demoblock;
            md.use(demoBlockPlugin);
        },
    },
};
