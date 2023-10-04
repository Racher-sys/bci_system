<template>
    <div class="body">
       <a-form v-bind="{labelCol: { span: 7 }, wrapperCol: { span: 15 }}">
        <a-form-item label="目标类型">
            <a-select
                placeholder="选择目标类型"
                :options="targetOptions">
            </a-select>
        </a-form-item>
        <a-form-item label="图片呈现时间">
            <a-input suffix="ms" placeholder="请输入图片呈现时间"/>
        </a-form-item>
        <a-form-item label="算法模型">
            <a-select
                placeholder="选择算法模型"
                :options="algorithmOptions">
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
const router = useRouter();
const targetOptions = ref<SelectProps['options']>([
    {value: 'plane', label: '飞机'},
    {value: 'pedestrian', label: '行人'}
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