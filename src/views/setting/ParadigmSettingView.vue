<template>
    <ContentWrapper>
        <a-table :columns="columns" :data-source="data" :pagination="{hideOnSinglePage: true}">
        <template #bodyCell="{ column,index,record }">
            <template v-if="column.key === 'action'">
                <a @click="aditClick(record)">编辑</a>
                <a-divider type="vertical" />
                <a @click="deleteClick(index)">删除</a>
            </template>
        </template>
        </a-table>
    </ContentWrapper>
    
    <ParadigmAditDrawer :open="open" @close="closeDrawer" @ok="okDrawer" />
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ParadigmAditDrawer from './ParadigmAditDrawer.vue';
import ContentWrapper from '../../components/ContentWrapper.vue';
import { useStore } from '../../store';
const open = ref<boolean> (false);
interface dataInfo {
    key: string,
    name: string,
    info?: string,
    

}
const usestore = useStore();
var a:dataInfo[] = [];
usestore.paradigm.forEach((element, index) => {
    a.push({key: (index+1).toString(),name: element.name, info: element.description});
});
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: '20%'
    },
    {
        title: '信息',
        dataIndex: 'info',
        key: 'info'
    },
    {
        title: '操作',
        key: 'action',
        width: '30%'
    },

];

// const data = ref<dataInfo[]>([
//   {
//     key: '1',
//     name: 'RSVP',
//     info: '快速序列视觉呈现范式',
//   },
//   {
//     key: '2',
//     name: 'SSVEP',
//     info: ''
//   },
//   {
//     key: '3',
//     name: 'MI',
//     info: '运动想象'
//   }
// ])

const data = ref<dataInfo[]>(a);

function aditClick(data: dataInfo){
    open.value = true;
    console.log(data);
}
function deleteClick(index: number){
    data.value.splice(index, 1);
    console.log(index);
}

function closeDrawer(){
    open.value = false;
}
function okDrawer(){
    open.value = false;
}

</script>

<style scoped>

</style>