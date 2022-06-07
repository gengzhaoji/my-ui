import { defineStore } from 'pinia';

import { getDicts } from '@/api/public';
import _camelCase from 'lodash/camelCase';
import dict from '@/config/dict';

const state = {},
    actions = {};
dict.forEach(function (item) {
    const name = _camelCase(item);
    state[name] = [];
    actions[`GET${name}`] = function () {
        return this.getDictsFn({ data: item, key: name });
    };
});

export default defineStore({
    id: 'dict',
    state: () => state,
    actions: {
        // 字典接口
        getDictsFn({ data, key }) {
            return new Promise((resolve, reject) => {
                if (this[key].length > 0) {
                    resolve(state[key]);
                } else {
                    getDicts(data)
                        .then((res) => {
                            this[key] = res.data;
                            resolve(this[key]);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                }
            });
        },
        /******************************************字典数据 *****************************/
        ...actions,
    },
});
