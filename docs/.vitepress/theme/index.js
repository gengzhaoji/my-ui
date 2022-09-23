import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/client/theme-default';

// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
import './style.scss';
// 导入插件的主题
import { registerComponents } from './register-components.js';

// MyUi组件
import MyUi from '../../../src/components/index';

// 初始化store
import store from '../../../src/store';

// 引入全局资源
import * as ElIcons from '@element-plus/icons';
/**模块store数据 */
import Com from '@s/com';
import Dict from '@s/dict';
import User from '@s/user';

export default {
    ...Theme,
    enhanceApp: ({ app }) => {
        app.use(store).use(ElementPlus).use(MyUi);
        for (const name in ElIcons) {
            /*
             * 以elIcon为前缀的命名规则，是为了适配已经使用属性名添加图标的内置组件，
             * 例如：<el-button icon="el-icon-refresh"></el-button>
             */
            // app.component('elIcon' + name, ElIcons[name]);
            app.component(name, ElIcons[name]);
        }
        app.config.globalProperties.$store = {
            com: Com(),
            dict: Dict(),
            user: User(),
        };
        registerComponents(app);
    },
};
