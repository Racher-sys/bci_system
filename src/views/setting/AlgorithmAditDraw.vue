<template>
    <a-drawer title="编辑" :open="open" placement="right" :closable="false" width="500px">
        <!-- 加入一个表单 -->
        <a-form v-bind="formItemLayout">
            <a-form-item label="算法名称">
                <a-input />
            </a-form-item>
            <a-form-item label="应用范式">
                <a-input />
            </a-form-item>
            <a-form-item label="算法描述">
                <a-textarea :rows="2" />
            </a-form-item>
        </a-form>
        <template #footer>
            <div style="display: flex; justify-content: right;">
                <a-button @click="$emit('close')">取消</a-button>
                <a-button type="primary" @click="$emit('ok')">确定</a-button>
            </div>
        </template>
    </a-drawer>
    </template>
    
    <script setup lang="ts">
        defineProps({
            open: Boolean,
        });
        defineEmits(['close', 'ok']);
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
    </script>
    
    <style scoped>
    .ant-btn {
        border-radius: 2px;
    }
    
    .ant-btn:first-child{
        margin-right: 2em;
    }
    </style>