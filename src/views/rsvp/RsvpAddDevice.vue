<template>
    <div class="body">
        <a-list 
            :data-source="Data"
            :split="false"
        >
        <!-- 头部信息 -->
        <template #header>
            <div class="header">设备列表</div>
        </template>
        <template #renderItem="{item, index}">
            <a-list-item>
                <a-list-item-meta style="text-align: left; white-space: pre-line;" :title="item.name" :description="item.info" />
                <template #actions>
                    <CaretRightOutlined style="font-size: 28px; color: rgb(137, 239, 137);" />
                    <a-button @click="handleAdit">编辑</a-button>
                    <a-button @click="handleDelete(index)">删除</a-button>
                </template>
            </a-list-item>
        </template>
        <template #footer>
            <div class="footer" @click="onHandleAddDevice">添加设备</div>
        </template>
       </a-list>
    <a-button class="btn" type="primary" @click="nextClick">下一步</a-button>
    
    </div>
    <a-modal 
        v-model:open="open" 
        title="添加设备" 
        cancelText="取消"
        okText="确定"
        width="500px"
        :bodyStyle="{height:'100px', lineHeight: '100px'}"
        @ok="handleOk">
        <a-checkbox-group v-model:value="state.checkList" :options="plainOptions" />
    </a-modal>

    <DeviceAditDrawer :open="drawerOpen"  @close="closeDrawer" @ok="okDrawer"/>
     
   
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import {CaretRightOutlined } from '@ant-design/icons-vue';
import DeviceAditDrawer from '../setting/DeviceAditDrawer.vue';
interface DataItem {
    name: string,
    info?: string
}
const router = useRouter();
const open = ref<boolean>(false);
const drawerOpen = ref<boolean>(false);
const Data = ref<DataItem[]>([
    {
        name: 'NeuroScan',
        info: 'IP: 10.1.21.53  Port: 4000'
    },
    {
        name: 'iViewX',
        info: 'SendIP: 10.1.21.53  SendPort: 4000 \n  ReceiveIP: 10.1.21.53  ReceivePort: 5000'
    }

]);
const plainOptions = ['NeuroScan', 'iViewX', 'DSI'];
const state = reactive({
    checkList: []
})

// 编辑设备按钮
function handleAdit() {
    drawerOpen.value = true;
}
function closeDrawer() {
    drawerOpen.value = false;
}
function okDrawer() {
    drawerOpen.value = false;
}

// 删除设备按钮
function handleDelete(idx: number) {
    Data.value.splice(idx, 1);
}

// 下一步的按钮
function nextClick() {
    router.push({name: 'rsvpSetExp'})
}

// 添加设备按钮
function onHandleAddDevice() {
    open.value = true;
}

// 确认添加设备按钮
function handleOk() {
    // 提交表单
    open.value = false;
}


</script>

<style scoped>
.body {
    width: 60%;
    padding: 2em;
    margin: 40px auto;
    background-color: rgba(208, 208, 208, 0.2);
    border-radius: 2em;
}

:global(.ant-list-footer){
    text-align: left;
}

:global(.ant-list-item-action) {
    display: flex;
    align-items: center;
}

.anticon-caret-right:hover {
    color: #4096ff !important;
}


.footer {
    display: inline-block;
    color: rgb(0, 103, 103);
    text-align: left;
    font-size: 1.1em;
    margin: 1em 2em;
}
.footer:hover {
    cursor: pointer;
    color: rgb(70, 182, 222);
    text-shadow: rgb(70, 182, 222) 0.1em 0.1em 0.5em
}

.header {
    font-size: 1.3em;
    margin: 1.5em auto;
}

.btn {
    margin-top: 4em;
    margin-bottom: 4em;
    width: 100px;
}

.btn span {
    padding: 50px;
}
</style>