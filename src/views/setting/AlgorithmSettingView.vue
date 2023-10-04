<template>
    <ContentWrapper>
        <a-button type="primary" @click="addClick">
            新增
        </a-button>
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

    <AlgorithmAditDraw :open="open" @close="closeDrawer" @ok="okDrawer"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ContentWrapper from '../../components/ContentWrapper.vue';
import AlgorithmAditDraw from './AlgorithmAditDraw.vue';
const open = ref<boolean> (false);
interface dataInfo {
    key: string,
    name: string,
    info?: string

}

const columns = [
    {
        title: '算法名称',
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

const data = ref<dataInfo[]>([
    {
        key: '1',
        name: 'EEGNet',
        info: 'A compact convolutional neural network for EEG-based brain–computer interfaces'
    },
    {
        key: '2',
        name: 'DCPM',
        info: 'Discriminative Canonical Pattern Matching for Single-Trial Classification of ERP Components'
    },
    {
        key: '3',
        name: 'xDAWN+RG',
        info: 'A combination of xDAWN Spatial Filtering, Rie- mannian Geometry, Logistic regression for classification.'
    }
])

function addClick(){
    open.value = true;
}

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

.ant-btn {
    float: left;
    margin-bottom: 1em;
}

</style>