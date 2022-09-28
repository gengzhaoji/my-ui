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
    vue: {
        reactivityTransform: true,
    },
    themeConfig: {
        logo: '/logoH.png',
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
            { text: '组件', link: '/ui/', activeMatch: '/ui/' },
            { text: '代码规范', link: '/code/', activeMatch: '/code/' },
            { text: '知识分享', link: '/knowledge/', activeMatch: '/knowledge/' },
            { text: '问题总结', link: '/bug/', activeMatch: '/bug/' },
            { text: 'Gitee', link: 'https://gitee.com/gengzhaoji/my-ui' },
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
                            link: '/ui/',
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
                    ],
                },
                {
                    text: '组件',
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
                        {
                            text: 'MyDatePicker 日期时间选择',
                            link: '/ui/guide/MyDatePicker',
                        },
                        {
                            text: 'MyEcharts 图表',
                            link: '/ui/guide/MyEcharts',
                        },
                        {
                            text: 'MyEditor 富文本',
                            link: '/ui/guide/MyEditor',
                        },
                        {
                            text: 'MyFileUpload 文件上传',
                            link: '/ui/guide/MyFileUpload',
                        },
                        {
                            text: 'MyForm 表单',
                            link: '/ui/guide/MyForm',
                        },
                        {
                            text: 'MyHeader 头部',
                            link: '/ui/guide/MyHeader',
                        },
                        {
                            text: 'MyImgUpload 图片上传',
                            link: '/ui/guide/MyImgUpload',
                        },
                        {
                            text: 'MyInput 输入框',
                            link: '/ui/guide/MyInput',
                        },
                        {
                            text: 'MyInputNumber 数字输入框',
                            link: '/ui/guide/MyInputNumber',
                        },
                        {
                            text: 'MyLazy 懒渲染',
                            link: '/ui/guide/MyLazy',
                        },
                        {
                            text: 'MyListPanel 分页内容',
                            link: '/ui/guide/MyListPanel',
                        },
                        {
                            text: 'MyMarquee 无缝滚动',
                            link: '/ui/guide/MyMarquee',
                        },
                        {
                            text: 'MyMenu 菜单',
                            link: '/ui/guide/MyMenu',
                        },
                        {
                            text: 'MyNumber 数字',
                            link: '/ui/guide/MyNumber',
                        },
                        {
                            text: 'MyPager 分页',
                            link: '/ui/guide/MyPager',
                        },
                        {
                            text: 'MyPanel 面板容器',
                            link: '/ui/guide/MyPanel',
                        },
                        {
                            text: 'MyPreview 文件预览',
                            link: '/ui/guide/MyPreview',
                        },
                        {
                            text: 'MyPrint 打印',
                            link: '/ui/guide/MyPrint',
                        },
                        {
                            text: 'MySelect 下拉选择',
                            link: '/ui/guide/MySelect',
                        },
                        {
                            text: 'MySignature 签名',
                            link: '/ui/guide/MySignature',
                        },
                        {
                            text: 'MySortable 拖拽排序',
                            link: '/ui/guide/MySortable',
                        },
                        {
                            text: 'MyTable 表格',
                            link: '/ui/guide/MyTable',
                        },
                        {
                            text: 'MyTimer 计时器',
                            link: '/ui/guide/MyTimer',
                        },
                    ],
                },
            ],
            '/code/': [
                {
                    text: '开发规范',
                    collapsible: true,
                    items: [
                        { text: '开发规范', link: '/code/' },
                        { text: '菜单配置', link: '/code/menu' },
                    ],
                },
                {
                    text: 'HTML规范',
                    collapsible: true,
                    items: [
                        { text: '代码规范', link: '/code/html/format' },
                        { text: '注释规范', link: '/code/html/annotation' },
                        { text: '文件模板', link: '/code/html/template' },
                    ],
                },
                {
                    text: 'CSS规范',
                    collapsible: true,
                    items: [
                        { text: '代码规范', link: '/code/css/format' },
                        { text: '注释规范', link: '/code/css/annotation' },
                        { text: 'SASS规范', link: '/code/css/sass' },
                    ],
                },
                {
                    text: '命名规范',
                    collapsible: true,
                    items: [
                        { text: 'HTML/CSS命名', link: '/code/name/file' },
                        { text: 'className命名', link: '/code/name/classname' },
                        { text: '图片命名', link: '/code/name/img' },
                    ],
                },
                {
                    text: 'JS规范',
                    collapsible: true,
                    items: [
                        { text: '语言规范', link: '/code/js/language' },
                        { text: '编码规范', link: '/code/js/format' },
                    ],
                },
            ],
            '/knowledge/': [
                {
                    text: 'Js',
                    collapsible: true,
                    items: [
                        {
                            text: 'js 基础',
                            link: '/knowledge/js/basics',
                        },
                    ],
                },
                {
                    text: 'Vue',
                    collapsible: true,
                    items: [
                        {
                            text: 'vue3 新特性',
                            link: '/knowledge/',
                        },
                        {
                            text: 'pinia 基础',
                            link: '/knowledge/vue/pinia',
                        },
                    ],
                },
                {
                    text: 'Three',
                    collapsible: true,
                    items: [
                        {
                            text: 'Three 基础',
                            link: '/knowledge/three/basics',
                        },
                        {
                            text: 'Three 灯光',
                            link: '/knowledge/three/light',
                        },
                        {
                            text: 'Three 例子',
                            link: '/knowledge/three/demo',
                        },
                    ],
                },
            ],
            '/bug/': [
                {
                    text: '插件',
                    items: [
                        {
                            text: 'VueRouter 传参问题',
                            link: '/bug/',
                        },
                        {
                            text: 'VitePress 打包问题',
                            link: '/bug/VitePress',
                        },
                        {
                            text: '谷歌浏览器无法调试问题',
                            link: '/bug/debugg',
                        },
                    ],
                },
                {
                    text: '问题',
                    items: [
                        {
                            text: 'ElTable 树形表格',
                            link: '/bug/ElTable',
                        },
                    ],
                },
            ],
        },
    },
    markdown: {
        config: (md) => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            const { demoBlockPlugin } = demoblock;
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'scss',
            });
        },
    },
};
