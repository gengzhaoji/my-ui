import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/client/theme-default';

// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
import './style.css';
// 导入插件的主题
import { registerComponents } from './register-components.js';

export default {
    ...Theme,
    enhanceApp: ({ app }) => {
        app.use(ElementPlus);
        registerComponents(app);
    },
};
