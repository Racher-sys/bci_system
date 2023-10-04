<template>
    
    <a-menu mode="inline" theme="light" >
    <a-menu-item key="home">
        <router-link to="/home/">
            <HomeOutlined />
            <span>首页</span>
        </router-link>
    </a-menu-item>
    <a-sub-menu>
        <template #title>
            <span>
              <AppstoreAddOutlined />
              <span>实验</span>
            </span>
          </template>
          <a-menu-item key="RSVP">
            <router-link to="/rsvp/">RSVP</router-link>
          </a-menu-item>
          <a-menu-item key="MI">
            <router-link to="/mi/">MI</router-link>
          </a-menu-item>
          <a-menu-item key="SSVEP">
            <router-link to="/ssvep/">SSVEP</router-link>
          </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="result">
        <router-link to="/result/">
            <FormOutlined />
            <span>结果评估</span>
        </router-link>
    </a-menu-item>
    <!-- <a-menu-item key="test">
        <router-link to="/test/">
            <RobotOutlined />
            <span>设备测试</span>
        </router-link>
    </a-menu-item> -->
    <a-sub-menu>
        <template #title>
            <SettingOutlined />
            <span>设置</span>
        </template>
        <a-menu-item key="set1">
            <router-link to="/setting/device/">设备设置</router-link>
          </a-menu-item>
          <a-menu-item key="set2">
            <router-link to="/setting/paradigm/">范式设置</router-link>
          </a-menu-item>
          <a-menu-item key="set3">
            <router-link to="/setting/algorithm/">算法设置</router-link>
          </a-menu-item>
    </a-sub-menu>
    </a-menu>
</template>

<script setup lang="ts">
import { HomeOutlined, 
         AppstoreAddOutlined, 
         FormOutlined,
         SettingOutlined,} from '@ant-design/icons-vue';

import { RouterLink } from 'vue-router';

</script>

<style scoped>

:global(.ant-menu-light.ant-menu-root.ant-menu-vertical) {
  border-inline-end: 0px;
}

</style>