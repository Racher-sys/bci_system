<template>
<a-drawer title="编辑" :open="open" placement="right" :closable="false" width="500px">
    <!-- 加入一个表单 -->
    <a-form v-bind="formItemLayout">
        <a-form-item label="设备名称">
            <a-input v-model:value="values.name"/>
        </a-form-item>
        <a-form-item label="IP地址(发送)">
            <a-input v-model:value="values.IPSend" />
        </a-form-item>
        <a-form-item label="端口号(发送)">
            <a-input v-model:value="values.portSend"/>
        </a-form-item>
        <a-form-item label="IP地址(接收)">
            <a-input v-model:value="values.IPReceive"/>
        </a-form-item>
        <a-form-item label="端口号(接收)">
            <a-input  v-model:value="values.protReceive"/>
        </a-form-item>
        <a-form-item label="设备描述">
            <a-textarea :rows="2" v-model:value="values.description"/>
        </a-form-item>
    </a-form>
    <template #footer>
        <div style="display: flex; justify-content: right;">
            <a-button @click="$emit('close')">取消</a-button>
            <a-button type="primary" @click="$emit('ok', values)">确定</a-button>
        </div>
    </template>
</a-drawer>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { watch, ref } from 'vue';
import { DataInfo } from '../../types/store';

const props =  defineProps({
    open: Boolean,
    // 这边的record定义DataInfo的类型是这样的
    record: {
        type: Object as PropType<DataInfo>,
    } 
});
const values = ref<DataInfo>();


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

// 打开就直接刷新就可以了。
watch(() => props.open, (newValue) => {
    if (newValue == true){
        values.value = JSON.parse(JSON.stringify(props.record));
    }
})

</script>

<style scoped>
.ant-btn {
    border-radius: 2px;
}

.ant-btn:first-child{
    margin-right: 2em;
}
</style>