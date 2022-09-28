# vue3 的新特性

自己学习整理的知识点，具体变换查看[官网](https://staging-cn.vuejs.org/)

## vue3 和 vue2 的对比

1. **优点**
    - vue3 基本兼容大多数的 vue2 写法，（除了一些删除了的 api）
    - vue3 项目的性能明显提升。
    - 更好的支持了 TypeScript。
    - 使用 ES6 的 `Proxy` 代替 `defineProperty` 实现响应式数据。
2. **性能提升的原理/原因**
    - **静态标记**
        - vue2 从根节点开始对虚拟 dom 进行全量对比（每个节点不论写死的还是动态的都会一层一层比较）
        - vue3 新增了静态标记 与上次虚拟 dom 对比的时候，只对比带有 patchFlags 的节点。跳过一些静态节点对比，从而提升性能。
    - **hoistStatic 静态提升**
        - vue2 里每当触发更新的时候，不管元素是否参与更新，每次都会重新创建
        - vue3 为了避免每次渲染的时候都要重新创建这些对象，会把不参与更新的元素保存起来，只创建一次，每次复用。将静态资源被提升到渲染函数 render 之外，作为常量使用。
3. **响应数据的变化**
    - **vue2**
        - vue2 使用 Object.defineProperty 来劫持各个属性的 setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
        - 对象：递归调用 defineProperty 对对象已有属性值的读取和修改进行拦截，需要进行深度的递归拦截。
        - 数组：重写数组更新数组一系列更新元素的方法来实现元素修改的劫持
        - 存在的问题：无法监听到对象属性的添加和删除，需要 Vue.set()来添加和删除。无法通过下标替换元素或更新 length。

-   **vue3**
    -   通过`Proxy(代理)`: 拦截对 data 任意属性的任意(13 种)操作, 包括属性值的读写, 属性的添加, 属性的删除等，避免了 vue2 响应式中的各种问题。
    -   通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作。

## vue3 新增特性

1. **Composition (组合) API**
    - Option API：vue2 创建组件时，会把数据放到 data，计算属性放到 computed，事件处理放到 methods，监听改变放到 watch；从而处理页面逻辑（该模式对于新手比较友好，各块比较明确）。
        - 组件功能越来越多，逻辑功能点分散，不易阅读（新增或修改一个需求，就需要分别在 data，methods 等...进行修改，功能多时，滚动条来回滚动查找很是麻烦。 ）
        - 可以通过 Mixins 重用逻辑代码，但是数据来源模糊还会有 Mixins 命名冲突的问题。
    - Composition API：将零散的 data，methods 代码重新组合，一个功能的代码放一块儿，并且可以单出拆分出函数。
        - 兼容 Option API，还可继续使用。
        - 利于代码重用，没有对 this 的使用，减少了 this 指向不明的情况。
        - 几乎是函数，编辑器可以帮我们进行类型检查和建议。
2. **setup**
    - setup 函数是一个新的 option，在初始化时执行一次，可以理解为使用 Composition API 的入口点。
    - 这个函数的返回一个对象，对象里的属性和方法，可以直接在模版中使用

```javascript
  <template>
    <div>{{msg}}</div>
  </template>

  <script>
  export default {
    setup () {
      const msg = 'hello World'
      return {
        msg
      }
    }
  }
  </script>
```

**注意：**

-   setup 在 beforeCreate 之前创建，因此，这个函数中没有 this。因此不能访问 data，methods 等。但 methods 中可以访问 setup 提供的属性和方法。
-   return 中返回的属性跟 data 合并，返回的方法跟 methods 里的方法合并；如有重名，`setup优先`。
-   setup 不能是一个 async 函数，使用 async 后返回值不是 return 的对象，而是 promise。
-   setup 接收两个参数 setup(props, context) || setup(props, {attrs, slots, emit}) 不能解构 props，否则会失去响应式

## vue3[响应式相关知识点](https://staging-cn.vuejs.org/api/)

-   响应式: 核心
    -   [ref()](https://staging-cn.vuejs.org/api/reactivity-core.html#ref)接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 `.value`。
    -   [computed ()](https://staging-cn.vuejs.org/api/reactivity-core.html#computed)接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 **ref** 通过 `.value` 暴露 getter 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 ref 对象。
    -   [reactive()](https://staging-cn.vuejs.org/api/reactivity-core.html#reactive)返回一个对象的响应式代理。
    -   [readonly()](https://staging-cn.vuejs.org/api/reactivity-core.html#readonly)接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。
    -   [watchEffect()](https://staging-cn.vuejs.org/api/reactivity-core.html#watchEffect)立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
    -   [watch()](https://staging-cn.vuejs.org/api/reactivity-core.html#watch)侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
-   响应式: 工具
    -   [isRef()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#isref)检查某个值是否为 ref。
    -   [unref()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#unref)如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。
    -   [toRef()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#toRef)基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。
    -   [toRefs()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#toRefs)将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。
    -   [isProxy()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#isProxy)检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。
    -   [isReactive()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#isReactive)检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。
    -   [isReadonly()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#isReadonly)检查一个对象是否是由 readonly() 或 shallowReadonly() 创建的代理。
-   响应式: 进阶
    -   [shallowRef()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowref)ref() 的浅层作用形式。
    -   [triggerRef()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#triggerRef)强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
    -   [customRef()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#customRef)创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。
    -   [shallowReactive()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowReactive)reactive() 的浅层作用形式。
    -   [shallowReadonly()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowReadonly)readonly() 的浅层作用形式
    -   [toRaw()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#toRaw)根据一个 Vue 创建的代理返回其原始对象。
    -   [markRaw()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#markRaw)将一个对象标记为不可被转为代理。返回该对象本身。

## 生命周期

-   `setup` 中也有新的生命周期 `onBeforeMoun`t -> `onMounted` -> `onBeforeUpdate` -> `onUpdated` -> `onBeforeUnmount` -> `onUnmounted` -> `onErrorCaptured` 跟 `options api` 混用时 `onBeforeMount` 在 `beforeMount` 之前，`onMounted` 在 `mounted` 之前...
-   `vue` 中父子顺序 父 `beforeCreate` -> 父 `created` -> 父 `beforeMount` -> 子 `beforeCreate` -> 子 `created` -> 子 `beforeMount` -> 子 `mounted` -> 父 `mounted` 在 `setup` 中声明周期**同样**。

## 使用 ref 操作 dom

> 注意其他操作时可以使用$ref(操作时不用写.value)代替 ref。

```
<template>
  <input type="text" ref="inputRef" value="这是input的文本"/>
</template>

<script setup>
import { onMounted, ref } from "vue";
// 本质是reactive({value:null})
const inputRef = ref(null);
onMounted(() => {
    console.log(inputRef.value.value);
});
console.log(inputRef.value);// null dom还没形成
</script>
```

## 自定义 hook 函数

-   与 mixin 类似，抽离公共代码(但是可以明确的确定数据、方法来源)

```javascript
import { reactive } from 'vue';
export default function hookTest() {
    const obj = reactive({ name: '张三', age: 25 });
    return { obj };
}
```

```javascript
<template>
  <div>{{ obj.name }}</div>
  <div>{{ obj.age }}</div>
</template>

<script setup>
import hookTest from './hookTest';
const {obj} = hookTest();
</script>
```

## 其他新特性

1. **创建方式不同**
    - 在 vue2 中的 main.js 中有以下代码。如果使用全局 api 则是 Vue.directive、Vue.component、Vue.config、Vue.mixin、Vue.prototype 等，都是挂载在 Vue 原型上。

```javascript
import Vue from 'vue';
import App from './App.vue';

const app = new Vue(App);
app.$mount('#app');
```

-   vue3 提供的是实例 api。通过 createApp 创建 vue 实例。

```javascript
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

| VUE2 全局 API              | VUE3 全局 API                              |
| -------------------------- | ------------------------------------------ |
| Vue.config                 | app.config                                 |
| Vue.config.productionTip   | 移除                                       |
| Vue.config.ignoredElementS | app.config.compilerOptions.isCustomElement |
| Vue.component              | app.component                              |
| Vue.directive              | app.directive                              |
| Vue.mixin                  | app.mixin                                  |
| Vue.use                    | app.use                                    |
| Vue.prototype              | app.config.globalProperties                |
| Vue.extend                 | 移除                                       |

2. **`v-if` 和 `v-for` 的优先级不同**

    - 在 vue2 中：当 v-if 和 v-for 同时使用时，v-for 的优先级高于 v-if。
    - 在 vue3 中：当 v-if 和 v-for 同时使用时，v-if 的优先级高于 v-for。

3. **`v-model` 语法糖**
    - vue2 中，在组件上使用 v-model 默认 prop 与 event 为 value 和 input。如要修改，通过子组件的 model 选项中的 prop 值和 event 值来指定属性名和事件名。

```javascript
<child v-model="pageTitle" />
<!--等同于-->
<child :value="pageTitle" @input="pageTitle = $event" />
```

```javascript
export default {
    model: {
        prop: 'title',
        event: 'change',
    },
    props: {
        title: {
            type: String,
            default: 'Default title',
        },
    },
    methods: {
        handleClick(val) {
            this.$emit('change', val);
        },
    },
};
```

-   除了使用上面方法对某一个 prop 进行 ‘双向绑定’ 还可以通过这种方式 v-bind.sync。
-   vue3 中 v-bind 的 .sync 修饰符已移除。:title.sync 替换为 v-model:title。

```javascript
<child :title="pageTitle" @update:title="pageTitle = $event" />
<!--等同于-->
<child :title.sync="pageTitle" />
```

```javascript
this.$emit('update:title', newValue);
```

-   vue3 默认 prop 与 event 为 modelValue 和 update:modelValue。如要修改，直接通过 v-model 后面参数 v-model:title 来指定属性名，并且支持绑定多个 v-model。

```javascript
<child v-model="pageTitle" />
<!--等同于-->
<child :modelValue="pageTitle" @update:modelValue="pageTitle = $event" />
```

-   如果需要修改 model 的名称，我们可以为 v-model 传递一个参数，作为子组件内 model 选项的代替。

```javascript
<child v-model:title="pageTitle" />
<!--等同于-->
<child :title="pageTitle" @update:title="pageTitle = $event" />
```

4. **$attrs**
    - vue2 中使用 v-bind='$attrs' 进行将父组件不被认为props特性绑定的属性传入子组件（不包含class以及style），配合interitAttrs一起使用，如果为true则将所有attribute添加到子组件的跟标元素上。但如果为false时，因为class以及style不属于$attrs，所以仍会添加到组件的跟元素上。
    - vue3 中$attrs包含所有传递给子组件的attribute，包含class以及style和vue2的`$listeners`。
5. **废除属性**
    - 移除`$on` `$off` `$once` 实例方法，组件实例不再实现事件触发接口。
    - vue2 中，可以使用`this.$children`访问当前实例的子组件。vue3 中已移除，推荐使用`$refs`。
    - vue2 中，可以使用过滤器`filter`来处理数据格式。vue3 中已移除，推荐使用方法调用或计算属性。
    - vue3 将移除了`$listeners`，因为现在事件监听器是 `$attrs` 的一部分（相当于父组件的@init=‘init’。不用在中间组件添加`v-on=‘$listeners’`，只需要`v-bind='$attrs'`，由$attrs 负责传递方法。即可在其子组件访问）。
    - vue2 中使用`propsData`用于在创建 Vue 实例的过程中传入`prop`，vue3 移除了这一属性。如果需要传递，则需要`createApp`的第二个参数。

```javascript
const Comp = Vue.extend({
    props: ['username'],
    template: '<div>{{ username }}</div>',
});

new Comp({
    propsData: {
        username: 'Evan',
    },
});
//vue3中需要这样
const app = createApp(
    {
        props: ['username'],
        template: '<div>{{ username }}</div>',
    },
    { username: 'Evan' }
);
```

## vue3 动态路由

> **TIP**
>
> 功能：根据登录用户权限数据生成前端访问路由。

```javascript
import { defineStore } from 'pinia';
import { shallowRef } from 'vue';
// 默认全局路由
import { homeRouters } from '@/api/public';
// 默认布局Layout、ParentView
import Layout from '@/extension/layout/index.vue';
import ParentView from '@/extension/ParentView/index.vue';
// 相关数据处理逻辑
import router from '@/router';
import { ElMessageBox } from 'element-plus';
import { clone } from '@u/convert';
import { find } from '@u/tree';
import user from './user';

/*
 * 处理解决import动态加载组件 打包部署为空的问题
 * **为通配符,vite不支持require导入方式,故用import.meta.glob(vite动态导入)
 * import.meta.glob
 * 该方法匹配到的文件默认是懒加载，通过动态导入实现，构建时会分离独立的 chunk，是异步导入，返回的是 Promise
 * import.meta.globEager
 * 该方法是直接导入所有模块，并且是同步导入，返回结果直接通过 for...in循环就可以操作
 */
const modules = import.meta.glob('../views/**/*.vue');

export default defineStore('guarder', {
    state: () => ({
        cachedComponents: [],
        Menus: [],
        RoutersList: [],
        addRouter: [],
    }),
    actions: {
        // 生成路由
        GenerateRoutes() {
            return new Promise((resolve) => {
                // 向后端请求路由数据
                homeRouters().then((res) => {
                    if (res?.data?.length) {
                        const { Menus, Routes } = filterAsyncRouter(clone(res.data));
                        this.Menus = Menus;
                        // 添加首页路由、404路由
                        this.addRouter = [
                            {
                                path: '/',
                                name: '/',
                                redirect: find(Menus, true, (item) => !item.children).path,
                                meta: {
                                    hideTabs: true,
                                },
                            },
                            ...Routes,
                            {
                                path: '/:pathMatch(.*)',
                                name: '/:pathMatch(.*)',
                                redirect: '/404',
                                meta: {
                                    hideTabs: true,
                                },
                            },
                        ];
                        this.addRouter.forEach((item) => {
                            if (item.parentName) {
                                router.addRoute(item.parentName, item);
                            } else {
                                router.addRoute(item);
                            }
                        });
                        this.RoutersList = [...new Set(router.getRoutes().map((item) => item.path))];
                        resolve();
                    } else {
                        ElMessageBox.alert('该角色用户暂无可视页面，请管理员分配角色权限！', '系统提示', {
                            confirmButtonText: '确定',
                            callback: () => {
                                user().LogOut();
                                window.location.reload();
                            },
                        });
                    }
                });
            });
        },
    },
});

// 遍历后台传来的路由字符串，转换为组件对象  动态添加路由
function filterAsyncRouter(data) {
    let RoutesData = Object.create(null),
        MenusData = Object.create(null),
        Routes = [],
        Menus = [];
    // 数据转换为对象
    data.forEach((item) => {
        /**
         * id 数据ID
         * parentId 父类ID
         * component .vue文件路径
         * layoutPath 布局路径 layoutPath == undefined为默认布局，layoutPath == 'ParentView'全屏布局，modules[`../views/${layoutPath}.vue`]自定义页面布局
         * icon 菜单图标
         * menuName 菜单名称
         * menuType 菜单类型  M——目录、C——菜单
         * path 菜单路由
         * visible 是否显示
         * isCache 是否缓存
         * orderNum 排序
         */
        let { id, parentId, component, layoutPath, icon, menuName, menuType, path, visible, isCache, orderNum } = item;
        if (parentId == '0' && menuType == 'M' && !component) {
            // 一层目录页面默认布局
            component = shallowRef(Layout);
        } else if (parentId !== '0' && menuType == 'M' && !component) {
            // 非第一层目录布局为 ParentView
            component = shallowRef(ParentView);
        } else {
            component = modules[`../views/${component}.vue`] || '';
        }
        if (component == '') return;
        // 无目录菜单
        if (parentId == '0' && menuType == 'C') {
            // 布局 layoutPath为默认布局，layoutPath == 'ParentView'全屏布局，modules[`../views/${layoutPath}.vue`]自定义页面布局
            const layout = !layoutPath ? shallowRef(Layout) : layoutPath == 'ParentView' ? shallowRef(ParentView) : modules[`../views/${layoutPath}.vue`];
            const parentName = !layoutPath ? 'Layout' : layoutPath == 'ParentView' ? 'ParentView' : 'layoutPath}';
            if (!router.hasRoute(parentName)) {
                router.addRoute({
                    name: parentName,
                    path: parentName,
                    component: layout,
                });
            }
            const Path = !/^(\/)/.test(path) ? `/${path}` : path;
            RoutesData[id] = {
                parentName,
                parentId,
                component,
                hidden: visible == 1,
                meta: { title: menuName, icon, keepAlive: isCache == 1 },
                path: Path,
                name: Path,
                orderNum,
                id,
            };
        } else {
            const Path = parentId == '0' ? (!/^(\/)/.test(path) ? `/${path}` : path) : path;
            RoutesData[id] = {
                component: component,
                hidden: visible == 1,
                meta: { title: menuName, icon, keepAlive: isCache == 1 },
                name: Path,
                path: Path,
                parentId,
                orderNum,
                id,
            };
        }
        // 左边菜单数据
        if (visible !== 1) {
            const Path = parentId == '0' ? (!/^(\/)/.test(path) ? `/${path}` : path) : path;
            MenusData[id] = {
                component: component,
                hidden: visible == 1,
                meta: { title: menuName, icon, keepAlive: isCache == 1 },
                name: Path,
                path: Path,
                parentId,
                orderNum,
                id,
            };
        }
    });
    // 组成路由树形结构
    for (let key in RoutesData) {
        let item = RoutesData[key];
        if (item.parentId == '0') {
            Routes.push(item);
        } else {
            let parent = RoutesData[item.parentId];
            if (parent) {
                if (!parent.children) {
                    parent.children = [];
                }
                item.path = `${parent.path}/${item.path}`;
                item.name = item.path;
                parent.children.push(item);
            }
        }
    }
    // 组成菜单树形结构
    for (let key in MenusData) {
        let item = MenusData[key];
        if (item.parentId == '0') {
            Menus.push(item);
            Menus.sort((a, b) => {
                return a.orderNum - b.orderNum;
            });
        } else {
            let parent = MenusData[item.parentId];
            if (parent) {
                if (!parent.children) {
                    parent.children = [];
                }
                item.path = `${parent.path}/${item.path}`;
                parent.children.push(item);
                parent.children.sort((a, b) => {
                    return a.orderNum - b.orderNum;
                });
            }
        }
    }
    return { Menus, Routes };
}
```
