# pinia 基础

## 前言

Pinia.js 是新一代的状态管理器，由 Vue.js 团队中成员所开发的，是下一代的 Vuex。
具体使用方法查看[pinia](https://pinia.web3doc.top/)

##### Pinia.js 有如下特点：

-   完整的 typescript 的支持；
-   足够轻量，压缩后的体积只有 1.6kb;
-   去除 mutations，只有 state，getters，actions（这是我最喜欢的一个特点）；
-   actions 支持同步和异步；
-   没有模块嵌套，只有 store 的概念，store 之间可以自由使用，更好的代码分割；
-   无需手动添加 store，store 一旦创建便会自动添加；

## 安装

```javascript
pnpm i pinia -S
```

## 使用

### 创建 Store

新建`src/store/index.js`文件；

```javascript
// 创建store
import { createPinia } from 'pinia';
const store = createPinia();
export default store;
```

### 创建 State

新建`src/store/user.js`文件；

```javascript
// 创建state
import { defineStore } from 'pinia';
export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        size: 'small',
        token: '',
    }),
});
```

#### 使用 State

```javascript
<template>
  <div>{{ userState.size }}</div>
</template>

<script setup name=''>
import user from '@/store/user';
const userState = user();
</script>
```

#### 修改 State

```javascript
<template>
  <div>{{ userState.size }}</div>
</template>

<script setup name=''>
import user from '@/store/user';
const userState = user();
userState.size = '修改state';
</script>
```

> 可以直接修改`state`的属性值，但是不建议直接修改，建议使用`actions`去修改`state`，`actions`的方法中可以直接通过`this`访问属性。

```javascript
import { defineStore } from 'pinia';
export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        size: 'small',
        token: '',
    }),
    actions: {
        updateSize(item) {
            this.size = item;
        },
    },
});
```

#### Getters

如果使用 state 属性层级较深，则可以使用`getters`方便获取，或者，对原始 state 属性数据进行二次操作并返回。

```javascript
import { defineStore } from 'pinia';
export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        size: 'small',
        token: '',
        userInfo: {
            userId: 'aa',
        },
    }),
    getters: {
        getUserId: (state) => state.userInfo.userId,
    },
});
// 使用方法同state属性
userState.getUserId;
```

#### Actions

```javascript
// actions中可以执行同步和异步任务
import { defineStore } from 'pinia';
import { authLogin } from '@/api/public';
export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        size: 'small',
        token: '',
    }),
    actions: {
        // 同步任务
        updateSize(item) {
            this.size = item
        }
        // 异步任务
        Login(data) {
            return new Promise((resolve, reject) => {
                authLogin(data)
                    .then((res) => {
                        this.token = res?.data?.tk;
                        resolve(this.token);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    }
});
```

#### Action 的相互调用

1、同一个 state 中 action 间的相互调用，直接用 this 访问即可。

```javascript
import { defineStore } from 'pinia';
import { authLogin } from '@/api/public';
export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        size: 'small',
        token: '',
    }),
    actions: {
        // 同步任务
        updateSize(item) {
            this.size = item
        }
        // 异步任务
        Login(data) {
            return new Promise((resolve, reject) => {
                authLogin(data)
                    .then((res) => {
                        this.token = res?.data?.tk;
                        this.updateSize('同一个state中action 间的相互调用')
                        resolve(this.token);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    }
});
```

2、在 action 里调用其他 state 里的 action ，引入对应的 store 后即可访问其内部的方法了。

```javascript
import { defineStore } from 'pinia';
import { authLogin } from '@/api/public';
import user from './user';
export default defineStore({
    id: 'guarder', // id必填，且需要唯一
    actions: {
        // 同步任务
        updateSizeFn(item) {
            user().updateSize(item);
        },
    },
});
```

### 数据持久化

插件 pinia-plugin-persist 可以辅助实现数据持久化功能。

#### 安装

```javascript
pnpm i pinia-plugin-persist -S
```

#### 使用

```javascript
// 创建store
import { createPinia } from 'pinia';
// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist';

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
```

#### 配置

> 在对应需要数据持久化的 state 进行响应的配置

```javascript
import { defineStore } from 'pinia';
import { authLogin } from '@/api/public';
export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        size: 'small',
        token: '',
        userInfo:{
            userId:'aa'
        }
    }),
    getters: {
       getUserId: (state) => state.userInfo.userId,
    }
    actions: {
        // 同步任务
        updateSize(item) {
            this.size = item
        }
        // 异步任务
        Login(data) {
            return new Promise((resolve, reject) => {
                authLogin(data)
                    .then((res) => {
                        this.token = res?.data?.tk;
                        resolve(this.token);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
       // 开启数据缓存，数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
    persist: {
        enabled: true,
        // 在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage。
        strategies: [
            {
                key: 'user',
                storage: localStorage,
                // 默认所有 state 都会进行缓存，通过 paths 指定要持久化的字段，其他的则不会进行持久化。
                paths: ['size', 'token'],
            },
        ],
    },
});
```
