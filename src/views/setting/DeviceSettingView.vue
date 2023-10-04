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
                    <a-divider type="vertical" />
                    <a>测试<CaretRightFilled style="color: rgb(127, 200, 255); width: 30px;"/></a> 
                </template>
            </template>
        </a-table>
    </ContentWrapper>

    <DeviceAditDrawer :open="open" @close="closeDrawer" @ok="okDrawer"/>
    
</template>
<script setup lang="ts">
import {CaretRightFilled} from '@ant-design/icons-vue';
import DeviceAditDrawer from './DeviceAditDrawer.vue';
import {ref} from 'vue';
import ContentWrapper from '../../components/ContentWrapper.vue';
interface dataInfo {
    key: string,
    name: string,
    info?: string

}
const open = ref<boolean> (false);
const columns = [
    {
        title: '设备名称',
        dataIndex: 'name',
        key: 'name',
        width: '20%'
    },
    {
        title: '设备信息',
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
    name: 'NeuroScan',
    info: '64位电极帽',
  },
  {
    key: '2',
    name: 'iView X',
    info: '眼动仪'
  },
  {
    key: '3',
    name: 'DSI-24',
    info: '干电极脑电帽'
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