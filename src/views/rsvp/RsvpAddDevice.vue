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
                    <a-button @click="handleConnect(item, index)">{{ judgeConnectContent(item.name) }}</a-button>
                    <!-- <a-button @click="handleAdit(item)" :disabled="  index === (disabledIndex.length > 0 ? disabledIndex[0]: -1)">编辑</a-button> -->
                    <a-button @click="handleAdit(item)" :disabled="isDisable(item.name)">编辑</a-button>
                    <a-button @click="handleDelete(index)" :disabled="isDisable(item.name)">删除</a-button>
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

    <DeviceAditDrawer :open="drawerOpen"  @close="closeDrawer" @ok="okDrawer" :record="currentRecord"/>
     
   
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive, computed } from 'vue';
import {CaretRightOutlined } from '@ant-design/icons-vue';
import DeviceAditDrawer from './DeviceAditDrawer.vue';
import { useStore, rsvpStore } from '../../store';
import {hyRequest1} from '../../service/index';
import {DataInfo} from '../../types/store';


const connectText = ref<string>('连接')
const disabledName = ref<string[]>([]);
const router = useRouter();
const open = ref<boolean>(false);
const drawerOpen = ref<boolean>(false);
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
const rsvpstore = rsvpStore();



console.log('欢迎来到添加设备页面');

/**
 * 关于设备列表
 */

// 计算列出来的Data
const Data = computed(() => {
    let tmp = [];
    for(let item of usestore.device) {
        for (let cur of rsvpstore.currentDevice){
            if (item['name'] === cur){
                let s = `IPSend: ${item['IPSend']}  portSend: ${item['portSend']}`;
                if (item['IPReceive'] && item['IPReceive'].length > 0) s += `\n  ReceiveIP: ${item['IPReceive']}  ReceivePort: ${item['protReceive']}`
                tmp.push({...item, info: s})
            }
        }
    }
    return tmp;
}) 

// 判断这个按钮是否是需要disable
function isDisable(name:string) {
    for (let a of disabledName.value){
        if (name === a) return true;
    }
    return false;
}

function judgeConnectContent(name:string) {
    for (let a of disabledName.value){
        if (name === a) return '断开连接';
    }
    return '连接';
}

// 编辑设备按钮
function handleAdit(e:any) {
    drawerOpen.value = true;
    currentRecord.value = e;
    console.log(e);
}

// 设备连接按钮（点击连接，成功的话后面两个按钮会变灰，不成功的话会有报错信息；点击断开连接的时候，就两个按钮会恢复正常）
async function handleConnect(item: any, index: number) {

    // 如果是连接的状态
    if (typeof(disabledName.value.find((element) => element === item.name)) === 'undefined') {
        console.log(disabledName.value.find((element) => element === item.name))

        let data  = {};
        // 判断一下是哪一个设备
        switch(item.name){
            case 'NeuroScan':
                data = {
                    type: 'neuroscan',
                    ip: item.IPSend,
                    port: parseInt(item.portSend) 
                }
                break;
            case 'iViewX':
                data = {
                    type: 'smired500',
                    send_ip: item.IPSend,
                    send_port: parseInt(item.portSend),
                    recv_ip: item.IPReceive,
                    recv_port: parseInt(item.protReceive)
                }
                break;
        }

        const res = await hyRequest1.post({url: 'adddevice', data: data});

        console.log(res);
        disabledName.value.push(item.name);
        connectText.value = '断开连接';

        // 如果连接成功
        if (res) {
        
        }
    }else {
        // 这边报错是因为ts觉得这个可能是undefined
        disabledName.value.splice(disabledName.value.find((element) => element === item.name), 1);
        connectText.value = '连接';
        console.log('断开连接！')
    }
    

}

// 删除设备按钮
function handleDelete(idx: number) {
    rsvpstore.currentDevice.splice(idx, 1);
}

// 点击下一步的按钮：跳转到下一个页面
function nextClick() {
    router.push({name: 'rsvpSetExp'})
}


/**
 * 操作modal弹窗
 */

//  modal弹窗中列出的设备，从useStore.device中获取
var plainOptions:string[] = usestore.device.map(element => {
    return element['name'];
});

const state = reactive<{checkList: string[]}>({
    checkList: []
})

// 添加设备按钮
function onHandleAddDevice() {
    state.checkList = rsvpstore.currentDevice;
    open.value = true;
}

// 确认添加设备按钮
function handleOk() {
    // 提交表单
    rsvpstore.currentDevice = state.checkList;
    open.value = false;
}

/**
 * 操作抽屉
 */

function closeDrawer() {
    drawerOpen.value = false;
}
function okDrawer(data: DataInfo) {
    let {key, ...curData} = data;
    usestore.aditDevice(curData);
    drawerOpen.value = false;
}



function handleGet() {
    hyRequest1.get({
    url: 'geteegdata',
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})
}
// 删除设备按钮



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