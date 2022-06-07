import cssVars from 'css-vars-ponyfill';

const darkTheme = 'rgb(51, 50, 50)';
const lightTheme = '#fff';
const lightBorderTheme = '#d6d6d6';

// 这里定义的 键/值 对，是为了给 cssVars 传参
export const getThemeMap = (isLight) => {
    return {
        '--theme-bg': isLight ? lightTheme : darkTheme,
        '--theme-img-bg': lightTheme,
        '--theme-color': isLight ? darkTheme : lightTheme,
        '--theme-boder-color': isLight ? lightBorderTheme : lightTheme,
    };
};

export const setTheme = (isLight = true) => {
    const themeMap = getThemeMap(isLight);
    const body = document.body;

    /* 实现方式一 */
    Object.keys(themeMap).forEach((key) => {
        body.style.setProperty(key, themeMap[key]);
    });

    /* 实现方式二 */
    // body.style.setProperty('data-theme', isLight ? 'light' : 'dark')

    // 实现兼容方案
    cssVars({
        watch: true, // 添加、删除、修改 <link> 或 <style> 元素的禁用或 href 属性时，ponyfill 将自行调用
        variables: themeMap, // variables 自定义属性名/值对的集合
        onlyLegacy: false, // false  默认将 css 变量编译为浏览器识别的 css 样式 ；true 当浏览器不支持css变量的时候将css变量编译为识别的css
    });
};
