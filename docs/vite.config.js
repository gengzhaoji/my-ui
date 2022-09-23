import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
// 自动导入composition api
import AutoImport from 'unplugin-auto-import/vite';

export default ({ command, mode }) => {
    return defineConfig({
        plugins: [
            AutoImport({
                imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
                dts: 'auto-import.d.js', // 生成 `auto-import.d.js` 全局声明
            }),
        ],
        css: {
            // 消除vite2打包出现警告，"@charset" must be the first，
            preprocessorOptions: {
                scss: {
                    charset: false,
                },
            },
            // 消除vite2打包出现警告，"@charset" must be the first，
            postcss: {
                plugins: [
                    {
                        postcssPlugin: 'internal:charset-removal',
                        AtRule: {
                            charset: (atRule) => {
                                if (atRule.name === 'charset') {
                                    atRule.remove();
                                }
                            },
                        },
                    },
                ],
            },
        },
        // alias 现在会被传递给 @rollup/plugin-alias 并不再需要开始/结尾处的斜线了。
        // 此行为目前是一个直接替换，所以 1.0 风格的目录别名需要删除其结尾处的斜线：
        resolve: {
            alias: {
                // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
                '@': resolve(__dirname, '../src'),
                '@a': resolve(__dirname, '../src/api'),
                '@c': resolve(__dirname, '../src/components'),
                '@s': resolve(__dirname, '../src/store'),
                '@u': resolve(__dirname, '../src/utils'),
            },
        },
    });
};
