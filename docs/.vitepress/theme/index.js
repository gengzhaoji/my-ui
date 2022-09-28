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
import { selectDictLabel } from '@u/util';
import '../../../src/style/index.scss';
/**模块store数据 */
import Com from '@s/com';
import Dict from '@s/dict';
import User from '@s/user';

export default {
    ...Theme,
    enhanceApp: ({ app }) => {
        app.use(store).use(ElementPlus).use(MyUi);
        for (const name in ElIcons) {
            app.component(name, ElIcons[name]);
        }
        app.config.globalProperties.$store = {
            com: Com(),
            dict: Dict(),
            user: User(),
        };
        app.config.globalProperties.selectDictLabel = selectDictLabel;
        registerComponents(app);
    },
};
