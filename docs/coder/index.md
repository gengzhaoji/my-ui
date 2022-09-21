# 代码生成器

## 概述

在实践中，我们发现相关后台请求的代码重复率非常高，新增和修改都费力，并且是没技术含量的体力活。 但又必须要这样做，不适合以公共函数的形式重用，为了解决这个重复的体力活，我们开发了代码生成器，用工具来代替体力活。

对于前后端的数据交互都可以归纳为是对实体的 新增、修改、删除、查询。

代码生成器的原理是也是按照对实体的增、删、改、查规范，利用 NodeJs 根据接口的配置文件（包含请求路径、请求选项）按指定模板创建统一符合开发规范的 js 文件到工程指定目录下。

## 示例

以下通过一个用户的实体配置，讲解由代码生成器生成的代码文件。

1、新建文件 /coder/schemas/system.js 以下配置实现用户的增、删、改、列表查询、详情查询、接口调用。

```javascript
module.exports = {
    name: '系统管理模块',
    model: [
        {
            title: '菜单管理',
            name: 'menu',
            methods: ['add', 'remove', 'edit', 'list', 'info'],
            path: '/system/menu',
        },
```

> **TIP**
>
> 新建实体配置文件必须要在/coder/schemas/目录下，可以建目录。

2、运行命令 npm run coder 生成代码，代码文件目录在 src/api/system.js, 目录结构如下：

![1663550523770.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f795498bc773460bb9cee953e7c20b6a~tplv-k3u1fbpfcp-watermark.image?)

## 约定

代码生成器生成的代码需要与后端接口有预先的约定

## 请求 URL 的约定

前后端分离开发最佳实践是采用 RESTful 的接口形式进行通信，在此我们对请求 URL 进行统一的规范约定。

| 请求类型   | 前端预定的方法前缀 | 请求方法类型 | api 地址的后缀映射 |
| ---------- | ------------------ | ------------ | ------------------ |
| 新增       | add                | post         | /add               |
| 更新       | edit               | put          | /edit              |
| 删除       | remove             | delete       | /remove            |
| 分页列表   | page               | get          | /page              |
| 不分页列表 | list               | get          | /list              |
| 导出       | export             | get          | /export            |
| 详情       | info               | get          | /info              |
| 唯一校验   | unique             | get          | /unique            |

## 请求传参的约定

GET 请求需要中文转码，导出 export 请求`responseType = 'blob'`

> if (config.method === 'get') config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'comma' });

## 分页列表，请求参数约定

| 参数名    | 说明                                                                    |
| --------- | ----------------------------------------------------------------------- |
| pageSize  | 每页几条数据                                                            |
| pageNum   | 页码，从 1 开始                                                         |
| needCount | needCount：1，需要总数,处理不需要总条数的情况（后台性能优化），默认为 1 |

## 分页列表 响应示例

```javascript
code: 200,
data: {
    rows: [{
        id: "2"
    },{
        id: "4"
    },{
        id: "5"
    }],
    total: 3
},
msg: "请求成功"
```

## 响应码 code 的约定

```
200：执行成功
401：未登录（需要重新登录）
403：权限不足
404: 访问资源不存在
418: 联合登陆失败
500：系统内部错误（非业务代码里显式抛出的异常，例如由于数据不正确导致空指针异常、数据库异常等等）
```

## 请求跨域问题解决方案

前后端分离开发模式，由于前后端可以进行单独部署，请求跨域问题很常见，解决方法主要有两种方式：

1.采用 nginx 代理 2.接口响应头开启 Cross （推荐）

响应头需要做以下配置, 同时后端需要开放 OPTIONS 类型的请求，跨域带 cookie 的请求时，浏览器先试探性发送 OPTIONS 请求，成功后才发起真正的请求

```javascript
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:请求的host
```

如:

```javascript
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:http://www.fbknav.cn:98
```

如果接口不需跨域带 cookie 验证信息，可以简单设置

```javascript
 Access-Control-Allow-Origin: *
```

## 全局配置

当后端提供的接口与约定的规范不一致的时候，可以通过配置进行相应的调整做适配，但建议还是按前端建议的约定规范。

## 配置说明`coder/config.js`

```javascript
module.exports = {
    // 架构配置文件目录
    schemasDir: './schemas/',

    // 模板文件目录
    templatesDir: './templates/',

    // api请求地址前缀
    pathPrefix: 'API_HOST',

    // api支持的请求方法
    methods: [
        'add', // 新增数据
        'edit', // 更新数据
        'remove', // 删除数据
        'page', // 列表数据，响应数据含有分页信息，如：总数、当前页码、页大小
        'list', // 不分页列表数据
        'export', // 根据条件导出
        'info', // 详情查询
        'unique', // 唯一校验
    ],

    // 数据请求类型对应http请求方法的映射
    methodTypeMap: {
        add: 'post',
        edit: 'put',
        remove: 'delete',
        page: 'get',
        list: 'get',
        export: 'get',
        info: 'get',
        unique: 'get',
    },

    // 数据请求类型对应api地址的后缀映射
    methodSuffixMap: {
        add: '/add',
        edit: '/edit',
        remove: '/remove',
        page: '/page',
        list: '/list',
        export: '/export',
        info: '/info',
        unique: '/unique',
    },

    // 请求方法对应的中文注释
    methodCommentMap: {
        add: '新增<%=cname%>',
        edit: '更新<%=cname%>',
        remove: '删除<%=cname%>',
        page: '获取<%=cname%>分页列表',
        list: '获取<%=cname%>不分页列表',
        export: '根据条件导出<%=cname%>',
        info: '获取<%=cname%>单条信息详情',
        unique: '<%=cname%>字段去重校验',
    },

    // 是否开启生成批量删除
    batchEnabled: true,

    // 生成api文件路径
    outApiPath: '../src/api/',
};
```

## 模型配置

一个标准的模型配置文件如下，建议相同的实体操作都在一个文件里配置。

```javascript
module.exports = {
    name: '系统管理模块', // 模块名称，用来生成注释文档
    model: {
        path: '/api/users', // 接口地址路径，必须
        title: '', // 接口说明，用来生成注释文档
        name: '', // 方法名，methods + name使用驼峰法生成完整的方法名，可选
        prefix: '', // 接口地址前缀，可选，默认为`coder/config.js`中的pathPrefix, 名称必须要在 src/config/index.js中定义，否则报错
        methods: [
            'add', // 新增数据
            'edit', // 更新数据
            'remove', // 删除数据
            'page', // 列表数据，响应数据含有分页信息，如：总数、当前页码、页大小
            'list', // 不分页列表数据
            'export', // 根据条件导出
            'info', // 详情查询
            'unique', // 唯一校验
        ], // 生成请求方法，没有该参数时默认全部，如需要自定义，书写名称即可
        options: {}, // axios 参数选项，可选
        disabled: false, // 是否禁用该配置项， 设置为true，代码生成器将忽略该配置
    },
};
```

### 1、实现对一个实体进行增、删、改、查、导出、唯一性校验

-   配置代码

```javascript
module.exports = {
    name: '系统管理模块',
    model: {
        name: 'system',
        path: '/api/user',
    },
};
```

-   生成代码

```javascript
/**
 *  系统管理模块 api
 *  @module api/system
 *  @author coder
 */

// API_HOST
import { API_HOST } from '@/config';

// axios
import axios from '@u/axios';

/**
 * 新增系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const addSystem = (data) =>
    axios({
        method: 'post',
        data: data,
        url: API_HOST + '/api/user/add',
    });

/**
 * 更新系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const editSystem = (data) =>
    axios({
        method: 'put',
        data: data,
        url: API_HOST + '/api/user/edit',
    });

/**
 * 删除系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const removeSystem = (data) =>
    axios({
        method: 'delete',
        data: data,
        url: API_HOST + '/api/user/remove',
    });

/**
 * 获取系统管理模块分页列表
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const pageSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/page',
    });

/**
 * 获取系统管理模块不分页列表
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const listSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/list',
    });

/**
 * 根据条件导出系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const exportSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/export',
    });

/**
 * 获取系统管理模块单条信息详情
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const infoSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/info',
    });

/**
 * 系统管理模块字段去重校验
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const uniqueSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/unique',
    });
```

### 2、只需要增、删、改、查中得某些操作，可以指定生成你需要的方法

-   配置代码

```javascript
module.exports = {
    name: "系统管理模块",
    model: {
        name: 'system',
        path: '/api/user'，
        // 需要生成的方法，可以按需要设置
        methods: ['add', 'edit', 'remove', 'list', 'info'],
    }
}
```

-   生成代码

```js
/**
 *  系统管理模块 api
 *  @module api/system
 *  @author coder
 */

// API_HOST
import { API_HOST } from '@/config';

// axios
import axios from '@u/axios';

/**
 * 新增系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const addSystem = (data) =>
    axios({
        method: 'post',
        data: data,
        url: API_HOST + '/api/user/add',
    });

/**
 * 更新系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const editSystem = (data) =>
    axios({
        method: 'put',
        data: data,
        url: API_HOST + '/api/user/edit',
    });

/**
 * 删除系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const removeSystem = (data) =>
    axios({
        method: 'delete',
        data: data,
        url: API_HOST + '/api/user/remove',
    });

/**
 * 获取系统管理模块不分页列表
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const listSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/list',
    });

/**
 * 获取系统管理模块单条信息详情
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const infoSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/info',
    });
```

### 3、自定义方法配置

-   配置代码

```javascript
module.exports = {
    name: '系统管理模块',
    model: {
        title: '登录接口',
        name: 'login',
        methods: 'auth',
        path: '/auth/login',
        options: {
            method: 'post',
        },
    },
};
```

-   生成代码

```js
/**
 *  系统管理模块 api
 *  @module api/system
 *  @author coder
 */

// API_HOST
import { API_HOST } from '@/config';

// axios
import axios from '@u/axios';

/**
 * 登录接口
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const authLogin = (data) =>
    axios({
        method: 'post',
        data: data,
        url: API_HOST + '/auth/login',
    });
```

### 4、指定请求接口地址前缀

-   配置代码

```javascript
module.exports = {
    name: '系统管理模块',
    model: {
        title: '登录接口',
        name: 'login',
        methods: 'auth',
        prefix: 'OTHER_PATH', // 设置与全局配置不同的前缀，OTHER_PATH 在 src/config/index.js中定义
        path: '/auth/login',
        options: {
            method: 'post',
        },
    },
};
```

-   生成代码

```javascript
/**
 *  系统管理模块 api
 *  @module api/system
 *  @author coder
 */

// OTHER_PATH
import { OTHER_PATH } from '@/config';

// axios
import axios from '@u/axios';

/**
 * 登录接口
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const authLogin = (data) =>
    axios({
        method: 'post',
        data: data,
        url: OTHER_PATH + '/auth/login',
    });
```

### 5、model 为数组类型

-   配置代码

```javascript
module.exports = {
    name: '系统管理模块',
    model: [
        {
            name: 'system',
            path: '/api/user',
        },
        {
            title: '登录接口',
            name: 'login',
            methods: 'auth',
            prefix: 'OTHER_PATH', // 设置与全局配置不同的前缀，OTHER_PATH 在 src/config/index.js中定义
            path: '/auth/login',
            options: {
                method: 'post',
            },
        },
    ],
};
```

-   生成代码

```javascript
/**
 *  系统管理模块 api
 *  @module api/system
 *  @author coder
 */

// API_HOST, OTHER_PATH
import { API_HOST, OTHER_PATH } from '@/config';

// axios
import axios from '@u/axios';

/**
 * 新增系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const addSystem = (data) =>
    axios({
        method: 'post',
        data: data,
        url: API_HOST + '/api/user/add',
    });

/**
 * 更新系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const editSystem = (data) =>
    axios({
        method: 'put',
        data: data,
        url: API_HOST + '/api/user/edit',
    });

/**
 * 删除系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const removeSystem = (data) =>
    axios({
        method: 'delete',
        data: data,
        url: API_HOST + '/api/user/remove',
    });

/**
 * 获取系统管理模块分页列表
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const pageSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/page',
    });

/**
 * 获取系统管理模块不分页列表
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const listSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/list',
    });

/**
 * 根据条件导出系统管理模块
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const exportSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/export',
    });

/**
 * 获取系统管理模块单条信息详情
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const infoSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/info',
    });

/**
 * 系统管理模块字段去重校验
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const uniqueSystem = (data) =>
    axios({
        method: 'get',
        data: data,
        url: API_HOST + '/api/user/unique',
    });

/**
 * 登录接口
 * @param {object} [data] 发送键值对数据
 * @returns {promise}
 */
export const authLogin = (data) =>
    axios({
        method: 'post',
        data: data,
        url: OTHER_PATH + '/auth/login',
    });
```
