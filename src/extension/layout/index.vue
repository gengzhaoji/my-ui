<template>
    <div id="layout" :class="theme.fixedTop ? 'overflow-hidden' : 'overflow-auto'">
        <el-container>
            <!-- header -->
            <el-header>
                <el-aside class="title pointer" :width="`${aside_width}px`" @click="$router.push('/index')">
                    <transition name="sidebarLogoFade" mode="out-in">
                        <div v-if="collapse" key="collapse" class="flex-center">
                            <img class="m-t-10" src="@/assets/img/logo.png" alt />
                        </div>
                        <div v-else key="expand" class="flex-center">
                            <img src="@/assets/img/logo.png" class="m-t-10" v-show="theme.logo" alt />
                            <span class="m-l-10" style="margin-top: -6px">{{ TITLE }}</span>
                        </div>
                    </transition>
                </el-aside>
                <el-main class="f1 w0 flex p-0 top-r">
                    <i
                        v-if="theme.collapsible && ['sidebar', 'both'].includes(theme.layout)"
                        @click.prevent="collapse = !collapse"
                        :class="[collapse ? 'icon-menu2' : 'icon-menu', 'btn']"
                    />
                    <div class="message flex">
                        <div class="li f1 w0">
                            <my-menu
                                v-if="['navbar'].includes(theme.layout)"
                                :data="menus"
                                :default-active="$store.user.activeMenu"
                                :props="{ id: 'path', route: 'path' }"
                                @select="menuTopSelect"
                                mode="horizontal"
                                unique-opened
                            />
                            <my-menu
                                v-if="['both'].includes(theme.layout)"
                                id="both"
                                :data="bothTopMenus"
                                :default-active="moduleName"
                                :props="{ id: 'path', route: 'path' }"
                                @select="menuTopSelect"
                                mode="horizontal"
                                unique-opened
                            />
                        </div>
                        <div class="li navbar-icon-action">
                            <Screen />
                        </div>
                        <!-- <div class="flex-center navbar-icon-action" @mouseenter="mouseEnterFn()">
                            <el-popover :width="360" trigger="hover" :show-after="300" popper-class="proppper-class">
                                <template #reference>
                                    <el-badge :max="99" :value="messageNum">
                                        <img src="@/assets/img/bell.png" :class="messageNum !== 0 ? 'animation' : ''" />
                                    </el-badge>
                                </template>
                                <Messagelist :data="list" :loadFn="mouseEnterFn" />
                            </el-popover>
                        </div> -->
                        <div class="li flex-center navbar-icon-action">
                            <el-dropdown style="margin-top: -6px">
                                <span style="font-size: 18px">{{ userInfo.nickName }}</span>
                                <el-icon class="m-l-4"><arrow-down /></el-icon>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item @click="$router.push('/system/profile')"> 个人中心 </el-dropdown-item>
                                        <el-dropdown-item @click="logout" divided> 退出登录 </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <!-- <div class="li navbar-icon-action" @click="settingVisible = true">
                            <el-tooltip class="item" effect="dark" content="系统设置">
                                <el-icon><tools /></el-icon>
                            </el-tooltip>
                        </div> -->
                    </div>
                </el-main>
            </el-header>
            <el-container class="p-0 h0">
                <el-aside :width="`${aside_width}px`" v-if="['sidebar'].includes(theme.layout) || (['both'].includes(theme.layout) && bothRightMenus.length)">
                    <!-- 菜单 -->
                    <my-menu
                        :data="theme.layout === 'sidebar' ? menus : bothRightMenus"
                        :collapse="collapse"
                        :default-active="$store.user.activeMenu"
                        @select="menuRightSelect"
                        unique-opened
                    />
                </el-aside>
                <el-container>
                    <el-header height="40px" v-if="theme.showTabs">
                        <Tabs />
                    </el-header>
                    <el-main class="main">
                        <!--内容区-->
                        <router-view v-slot="{ Component }">
                            <transition name="fade-transform" mode="out-in" appear>
                                <keep-alive :include="$store.guarder.cachedComponents">
                                    <component :is="Component" :key="$route.path" />
                                </keep-alive>
                            </transition>
                        </router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>

        <el-drawer title="设置" size="320px" append-to-body direction="rtl" v-model="settingVisible">
            <div class="h100" style="background: #fff">
                <Setting />
            </div>
        </el-drawer>
    </div>
</template>

<script setup name="layout">
import { find } from '@u/tree';
import myMenu from '@c/my-menu';
import Tabs from './Tabs.vue';
import Screen from './Screen.vue';
import Setting from './Setting.vue';
// import Messagelist from './Messagelist.vue';
import { TITLE } from '@/config';
import { pageMessage, unReadCount } from '@/api/system';

const $vm = inject('$vm'),
    $route = useRoute(),
    screenWidth = inject('screenWidth'),
    { theme, userInfo } = $vm.$store.user;

let collapse = $ref(false),
    moduleName = $ref(''),
    screenOne = $ref(true),
    settingVisible = $ref(false),
    bothRightData = reactive({}),
    list = $ref([]),
    messageNum = $ref('');
// 监听属性
watch(
    () => theme.layout,
    (val) => {
        if (val === 'both') {
            let [one, two] = $route?.matched;
            moduleName = one.path === '/' ? two.path : one.path;
        }
    },
    { immediate: true }
);
// 计算属性
const menus = computed(() => $vm.$store.guarder.Menus),
    width = computed(() => {
        let data = screenWidth() * 0.17;
        if (data < 250) {
            data = 250;
        } else if (data > 300) {
            data = 300;
        }
        return data;
    }),
    aside_width = computed({
        get: () => {
            if (screenWidth() < 1300) {
                if (screenOne) {
                    screenOne = false;
                    collapse = true;
                    return '65px';
                }
            } else {
                screenOne = true;
            }
            return collapse ? '65px' : width.value;
        },
        set: (val) => {},
    }),
    // 上下+左右布局 时的上面的菜单数据
    bothTopMenus = computed(() => {
        return $vm.clone(menus).map((item) => {
            bothRightData[item.path] = item.children;
            delete item.children;
            return item;
        });
    }),
    // 上下+左右布局 时的左边的菜单数据
    bothRightMenus = computed(() => bothRightData[moduleName] || []);

// 选中的菜单
watch(
    useRoute(),
    (val) => {
        if (find($vm.$store.guarder.Menus, true, (item, i, data) => item.path === val.path) !== null) {
            $vm.$store.user.activeMenu = val.path;
        }
    },
    { immediate: true }
);

// 初始化逻辑
// unReadCountFn();
// let timer = setInterval(() => {
//     unReadCountFn();
// }, 5 * 60 * 1000);
// 组件销毁逻辑
// onBeforeUnmount(() => {
//     clearInterval(timer);
//     timer = null;
// });

function logout() {
    $vm.$$confirm('确定注销并退出系统吗？').then(() => {
        $vm.$store.user.LogOut().then(() => {
            $vm.$router.push({
                path: '/login',
            });
        });
    });
}
function menuRightSelect(id, path) {
    $vm.$router.push(id);
}
function menuTopSelect(id) {
    if (moduleName !== id) {
        moduleName = id;
        // 有左边菜单栏的默认显示第一个菜单
        let data = bothRightData[moduleName];
        let pathFn = function (Array) {
            Array.forEach((item, index) => {
                if (index === 0) {
                    if (item.children && item.children.length) {
                        pathFn(item.children);
                    } else {
                        id = item.path;
                    }
                }
            });
        };
        if (data && data.length) {
            pathFn(data);
        }
        $vm.$router.push(id);
    }
}
// function mouseEnterFn() {
//     pageMessage({ isRead: 0, needCount: 0 }).then((res) => {
//         let data = res.data.rows;
//         messageNum = res.data.unReadTotal;
//         data.forEach((item) => {
//             if (item.businessCode === 1000) {
//                 item.path = '/personnel/information';
//                 item.link = '补全 >';
//             } else if (item.businessCode === 1001) {
//                 item.path = '/equipment/return';
//                 item.link = '归还 >';
//             } else if (item.businessCode === 1002) {
//                 item.path = '/carrier/Creturn';
//                 item.link = '归还 >';
//             } else if (item.businessCode === 1003) {
//                 item.path = '/personnel/information';
//                 item.link = '复审 >';
//             } else {
//                 item.path = '';
//                 item.link = '';
//             }
//         });
//         list = data;
//     });
// }
// 未读消息数量
// function unReadCountFn() {
//     unReadCount().then((res) => {
//         messageNum = res.data;
//     });
// }
</script>

<style lang="scss" scoped>
$--line-height: var(--el-header-height);

:deep(.el-aside) {
    transition: all 0.3s;
}
#layout {
    height: 100%;
    width: 100%;
    display: flex;

    :deep(.el-header) {
        display: flex;

        .title {
            transition: all 0.3s;
            text-align: center;
            height: $--line-height;
            line-height: $--line-height;
            background: var(--system-logo-background);
            color: var(--system-logo-color);
            > div {
                position: relative;
                height: 100%;
                overflow: hidden;
                text-overflow: clip;
                white-space: nowrap;
                img {
                    height: 58px;
                    vertical-align: middle;
                }

                .m-l-10 {
                    font-family: 'five';
                    margin: 0;
                    font-size: 28px;
                    font-weight: bold;
                    display: inline-block;
                    letter-spacing: 5px;
                }
            }
        }

        .top-r {
            background: var(--system-header-background);
            color: var(--system-header-text-color);
            .btn {
                font-size: 20px;
                line-height: $--line-height;
                cursor: pointer;
                margin: 0 20px;
            }

            .message {
                flex: 1 0 auto;
                width: 0;
                height: $--line-height;
                text-align: right;
                overflow-x: auto;
                overflow-y: hidden;
                white-space: nowrap;

                .li {
                    cursor: pointer;
                    height: $--line-height;
                    line-height: $--line-height;
                }

                .navbar-icon-action {
                    font-size: 18px;
                    padding: 0 10px;
                    color: var(--system-header-breadcrumb-text-color);
                    &:hover {
                        background-color: var(--system-header-item-hover-color);
                    }
                    .animation {
                        animation: zy 2.5s 0.15s linear infinite;
                        -moz-animation: zy 2.5s 0.15s linear infinite;
                        -o-animation: zy 2.5s 0.15s linear infinite;
                        -ms-animation: zy 2.5s 0.15s linear infinite;
                        -webkit-animation: zy 2.5s 0.15s linear infinite;
                    }
                }
            }
        }
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
            line-height: 80px;
            font-size: 16px;
            color: #b4b4b4;
        }
    }
    :deep(.el-dropdown) {
        color: var(--system-header-breadcrumb-text-color, var(--el-text-color-regular));
    }

    :deep(.el-aside) {
        background-color: var(--system-menu-background);
        overflow-x: hidden;
        z-index: 1;
    }

    .main {
        padding: 0px;
        position: relative;
        background-color: var(--system-container-background);
        overflow: hidden;
    }

    @keyframes zy {
        10% {
            transform-origin: top;
            transform: rotate(20deg);
        }

        20% {
            transform: rotate(-15deg);
        }

        30% {
            transform: rotate(5deg);
        }

        40% {
            transform: rotate(-5deg);
        }

        50%,
        100% {
            transform: rotate(0deg);
        }
    }
}
:deep(.el-drawer__body) {
    background-color: transparent !important;
}
</style>
