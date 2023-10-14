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

    <DeviceAditDrawer :open="open" @close="closeDrawer" @ok="okDrawer" :record="currentRecord"/>
    
</template>
<script setup lang="ts">
import {CaretRightFilled} from '@ant-design/icons-vue';
import DeviceAditDrawer from './DeviceAditDrawer.vue';
import {ref, watch} from 'vue';
import ContentWrapper from '../../components/ContentWrapper.vue';
import {useStore} from '../../store/index';
import { DataInfo } from '../../types/store';
import {DeviceValue} from '../../types/store';
import { stringType } from 'ant-design-vue/es/_util/type';


const open = ref<boolean> (false);
const currentRecord = ref<DataInfo>({
    key: '',
    name: '',
    IPSend: '',
    portSend:'',
    IPReceive: '',
    protReceive: '',
    description: '',
});
const usestore = useStore();

let a:DataInfo[] = usestore.device.map((element, index) => {
    return {key: (index + 1).toString(),...element};
});

const columns = [
    {
        title: '设备名称',
        dataIndex: 'name',
        key: 'name',
        width: '20%'
    },
    {
        title: '设备信息',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: '操作',
        key: 'action',
        width: '30%'
    },
];

const data = ref<DataInfo[]>(a);

function addClick(){
    open.value = true;
    currentRecord.value = {
    key: '',
    name: '',
    IPSend: '',
    portSend:'',
    IPReceive: '',
    protReceive: '',
    description: '',
 }
}

// 编辑设备
function aditClick(data: DataInfo){
    open.value = true;
    currentRecord.value = data;
    let {key, ...curData} = data;
    usestore.aditDevice(curData);
}
function deleteClick(index: number){
    console.log(data.value[index].name);
    usestore.deleteDevice(data.value[index].name);
    data.value.splice(index, 1);
}

function closeDrawer(){
    open.value = false;
}
function okDrawer(data: DataInfo){
    let {key, ...curData} = data
    open.value = false;
    usestore.aditDevice(curData);
}

// 监听open的变化
watch(open, (value) => {
    if(value === false) {
        // 重新刷新一下表单中的数
        data.value = usestore.device.map((element, index) => {
            console.log(element);
            return {key: (index + 1).toString(), ...element}
        })
    }
})
</script>

<style scoped>

.ant-btn {
    float: left;
    margin-bottom: 1em;
}

</style>