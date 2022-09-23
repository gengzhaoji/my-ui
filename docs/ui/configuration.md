# 文件配置

使用一个框架，首先熟悉他的项目文件结构。

## 文件结构

```
├─ .vscode            vscode配置，包含代码格式化    文件夹
├─ coder              代码生成器                    文件夹
├─ docs               框架文档                      文件夹
├─ public             静态公共资源                  文件夹
├─ src                源码                          文件夹
├─ .env.29            环境变量                      文件
├─ .gitignore         git忽略配置文件               文件
├─ eslintrc.js        eslintrc配置                  文件
├─ index.html         入口页面                      文件
├─ package-lock.json  锁定安装时的包的版本号        文件
├─ package.json       包管理文件                    文件
├─ index.html         入口页面                      文件
├─ README.md          说明文档                      文件
└─ vite.config.js     vite配置文件                  文件
```

## coder 文件夹

```
coder
 ├─ schemas         业务请求配置文件夹
 │
 ├─ templates       模板配置信息
 │    ├─ api.js     生成api请求模板
 │    └─ icons.js   生成字体图标模板
 │
 ├─ config          生成请求的相关配置
 |
 └─ index.js        代码生成的入口
```

## src 文件夹

```
src
 ├─ api             网络请求文件夹
 │   └─ system.js   生成的网络API接口文件
 │
 ├─ assets          静态文件资源
 │
 ├─ components      全局公用组件
 │
 ├─ config
 │    ├─ dict       数据字典配置
 │    ├─ icon.js    项目自定义字体图标
 │    ├─ index.js   项目请求前缀等配置
 │
 ├─ layout          项目页面布局
 │    ├─ mode       布局模式文件夹
 │    ├─ footer.js  项目页面底部布局
 │    ├─ header.js  项目页面头部布局
 │    ├─ index.js   项目页面主题布局
 │    ├─ index.less 布局样式
 │    ├─ siderMenu.js 项目页面侧边栏菜单布局
 │    └─ topMenu.js  项目页面顶部栏菜单布局
 │
 ├─ extension       布局，登录，404等页面
 │
 ├─ router          路由文件夹
 │
 ├─ store           pinia全局数据文件夹
 │    ├─ com.js     全局公用数据
 │    ├─ dict.js    全局字典数据
 │    ├─ guarder.js 动态路由
 │    ├─ user.js    项目token等用户信息
 │    └─ index.js   入口文件
 |
 ├─ style           项目公用css
 │
 ├─ utils           项目路由文件夹
 │
 ├─ views           项目页面文件夹
 │
 ├─ utils           工具库
 |
 ├─ App.vue         项目渲染入口
 |
 └─ main.js         项目启动入口
```
