import demoblock from 'vitepress-theme-demoblock';

export default {
    title: 'my-ui',
    description: '此框架使用与二次开发，前端框架使用vue，UI框架使用element-plus，全局数据状态管理使用pinia，ajax使用库为axios。用于快速搭建中后台页面。',
    lang: 'en-cn',
    lastUpdated: true,
    hmr: { overlay: false },
    appearance: true,
    ignoreDeadLinks: true,
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
            { text: '首页', link: '/' },
            { text: '组件', link: '/ui/installation' },
            { text: '问题总结', link: '/bug/' },
            { text: '知识分享', link: '/knowledge/' },
            { text: 'Gitlab', link: 'http://192.168.1.16:9980/fe/my-ui' },
        ],
        // 侧边栏
        sidebar: {
            '/ui/': [
                {
                    text: '基础',
                    collapsible: true,
                    items: [
                        {
                            text: '安装',
                            link: '/ui/installation',
                        },
                        {
                            text: '快速开始',
                            link: '/ui/quickstart',
                        },
                        {
                            text: '文件配置',
                            link: '/ui/configuration',
                        },
                        {
                            text: '代码生成器',
                            link: '/ui/coder',
                        },
                        {
                            text: '自定义代码片段',
                            link: '/ui/page',
                        },
                        { text: '菜单配置', link: '/ui/menu/' },
                        { text: '权限配置', link: '/ui/power/' },
                    ],
                },
                {
                    text: '基础组件',
                    collapsible: true,
                    items: [
                        {
                            text: 'MyButton 按钮',
                            link: '/ui/guide/MyButton',
                        },
                        {
                            text: 'MyButtonExport 导出按钮',
                            link: '/ui/guide/MyButtonExport',
                        },
                        {
                            text: 'MyButtonText 操作按钮',
                            link: '/ui/guide/MyButtonText',
                        },
                        {
                            text: 'MyTable 表格',
                            link: '/ui/guide/MyTable',
                        },
                        {
                            text: 'MyCapture 截取屏幕',
                            link: '/ui/guide/MyCapture',
                        },
                        {
                            text: 'MyCascader 级联选择',
                            link: '/ui/guide/MyCascader',
                        },
                        {
                            text: 'MyCornerMark 角标',
                            link: '/ui/guide/MyCornerMark',
                        },
                    ],
                },
            ],
            '/bug/': [
                {
                    text: '常见',
                    items: [
                        {
                            text: '安装',
                            link: '/bug/installation',
                        },
                    ],
                },
            ],
        },
        lineNumbers: true,
    },
    markdown: {
        config: (md) => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            const { demoBlockPlugin } = demoblock;
            md.use(demoBlockPlugin);
        },
    },
};
