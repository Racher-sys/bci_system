<template>
    <div class="body">
       <a-form v-bind="{labelCol: { span: 7 }, wrapperCol: { span: 15 }}" >
        <a-form-item label="目标类型">
            <a-select
                placeholder="选择目标类型"
                :options="targetOptions"
                v-model:value="formState.targetType">
            </a-select>
        </a-form-item>
        <a-form-item label="图片呈现时间">
            <a-input suffix="ms" placeholder="请输入图片呈现时间" v-model:value="formState.frequent"/>
        </a-form-item>
        <a-form-item label="算法模型">
            <a-select
                placeholder="选择算法模型"
                :options="algorithmOptions"
                v-model:value="formState.algorithm"
                >
            </a-select>
        </a-form-item>
       </a-form>
    </div>
    <a-button class="btn" type="primary" @click="nextClick">下一步</a-button>
   
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';
import { rsvpInfo } from '../../types/store';
import { rsvpStore } from '../../store/index';
const router = useRouter();
const rsvpstore = rsvpStore();

// 表单数据对象
const formState = ref<rsvpInfo>(rsvpstore.info);
const targetOptions = ref<SelectProps['options']>([
    {value: '飞机', label: '飞机'},
    {value: '行人', label: '行人'}
])
const algorithmOptions = ref<SelectProps['options']>([
    {value: 'EEGNet', label: 'EEGNet'},
    {value: 'DCPM', label: 'DCPM'},
    {value: 'HDCA', label: 'HDCA'}
])
function nextClick(){
    router.push({name: 'RsvpStartExp'});
}
</script>

<style scoped>

.body {
    width: 60%;
    padding: 2em;
    margin: 40px auto;
}

.btn {
    margin-top: 2em;
    width: 100px;
}


</style>