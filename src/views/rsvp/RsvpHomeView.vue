<template>
    <div class="body1">
        <a-steps :current="current" :items="items" class="step" />

        <div class="content">
            <!-- 加入嵌套路由 -->
            <router-view></router-view>
        </div>
    </div>
   
   
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { StepProps } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
const current = ref<number>(0);
const route = useRoute();
const router = useRouter();

const items = ref<StepProps[]>([
  {
    title: '接入设备',
    onClick: () => { router.push( { name: 'rsvpDeviceSetting'})}
  },
  {
    title: '实验设置',
    onClick: () => { router.push( { name: 'rsvpSetExp'})}
  },
  {
    title: '开始实验',
    onClick: () => { router.push( { name: 'RsvpStartExp'})}
  },
]);

// 监视route的变化,有三种rsvpDeviceSetting，rsvpSetExp，RsvpStartExp，RsvpExp
watchEffect(() => {
    if (route.name === 'rsvpDeviceSetting') current.value = 0
    else if (route.name === 'rsvpSetExp') current.value = 1;
    else if (route.name === 'RsvpStartExp') current.value = 2;
    else if (route.name === 'RsvpExp') current.value = 3;
})
</script>

<style scoped>
.body1 {
    background-color: white;
    height: 100%;
}


:global(.ant-card-head){
    min-height: 40px !important;
    background-color: aquamarine;
}

:global(.ant-card) {
    border-radius: 3px !important;
}

.title {
    float: left;
    color: rgb(120, 120, 120);
    font-size: 1em;
}

.step {
    padding: 10px 20px;
    width: 100%;
}

.content {
    margin: 10px 20px;
    height: 90%;
}
</style>