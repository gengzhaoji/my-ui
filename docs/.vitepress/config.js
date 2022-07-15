import demoblock from 'vitepress-theme-demoblock';

export default {
    title: 'my-ui',
    description: 'vue3+element-plus二次封装',
    lang: 'en-cn',
    themeConfig: {
        // 展示搜索框
        algolia: {
            appKey: '',
            indexName: '',
            searchParameters: {
                faeFilters: ['tags:guide,api'],
            },
        },
        head: [
            // 改变title的图标
            [
                'link',
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                },
            ],
        ],
        nav: [{ text: 'Gitlab', link: 'http://192.168.1.16:9980/fe/my-ui' }],
        // 侧边栏
        sidebar: [
            {
                text: '基础',
                items: [
                    {
                        text: '安装',
                        link: '/installation/',
                    },
                    {
                        text: '快速开始',
                        link: '/quickstart/',
                    },
                    {
                        text: '自动化API',
                        link: '/coder/',
                    },
                    {
                        text: '自定义代码片段',
                        link: '/page/',
                    },
                ],
            },
            {
                text: '基础组件',
                items: [
                    {
                        text: 'Button 按钮',
                        link: '/guide/button',
                    },
                ],
            },
        ],
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
