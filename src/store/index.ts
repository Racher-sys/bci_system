import { defineStore } from "pinia";

// 需要全局状态管理的数据：


export const useStore = defineStore('user', {
    state: () => {
        return {
            devices:[{
               name: 'NeuroScan',
            }]
        }
    },
    getters: {},
    actions: {}
})
