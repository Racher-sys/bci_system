<template>
    <div class="body">
        <a-list :data-source="listDevice" :bordered="true" :split="true" style="padding: 0.7em;">
        <template #header>
            <div class="header">设备列表</div>
        </template>
        <template #renderItem="{item}">
            <a-list-item style="display: block;" >
                <a-row>
                    <a-col :span="9" class="content name" >{{ item.name }}</a-col>
                    <a-col :span="15" class="content info" >{{ item.info }}</a-col>
                </a-row>
            </a-list-item>
        </template>
       </a-list>
       <a-list :data-source="listExpInfo"  :bordered="true" :split="true" style="margin-top: 0.5em; padding: 0.7em;">
        <template #header>
            <div class="header">实验信息</div>
        </template>
        <template #renderItem="{item}">
            <a-list-item style="display: block;" >
                <a-row>
                    <a-col :span="9" class="content name" >{{ item.name }}</a-col>
                    <a-col :span="15" class="content info" >{{ item.info }}</a-col>
                </a-row>
            </a-list-item>
        </template>
       </a-list>
       <a-button class="btn" type="primary" @click="startClick" >开始实验</a-button>
    </div>
    
   
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();

interface DataItem {
    name: string,
    info?: string
}

const listDevice = ref<DataItem[]>([
    {
        name: 'NeuroScan',
        info: 'IP: 10.1.21.53  Port: 4000'
    },
    {
        name: 'iViewX',
        info: 'SendIP: 10.1.21.53  SendPort: 4000 \n  ReceiveIP: 10.1.21.53  ReceivePort: 5000'
    }
])

const listExpInfo = ref<DataItem[]>([
    {
        name: '目标类型',
        info: '飞机'
    },
    {
        name: '图片呈现时间',
        info: '500ms'
    },
    {
        name: '算法模型',
        info: 'EEGNet'
    }
])



function startClick(){
    router.push({name: 'RsvpExp'});
}

</script>

<style scoped>

.body {
    width: 60%;
    padding: 2em;
    margin: 40px auto;
   
}

.header {
    text-align: left;
    color: rgb(112, 112, 112);
    font-size: 1.05em;
}

.content {
    text-align: left; 
    white-space: pre-line;
    line-height: 2em;
    margin-bottom: 5px;
}

.name {
    font-size: 1.03em;
    color: rgb(39, 39, 39);
    font-weight: 500;
}
.info {
    font-size: 1em;
    color: rgb(39, 39, 39);
}

.btn {
    margin-top: 4em;
    width: 100px;
}

</style>