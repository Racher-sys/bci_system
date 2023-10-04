<script setup lang="ts">
import { ref, type CSSProperties } from 'vue';
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
const collapsed = ref<boolean>(false);
const headerStyle: CSSProperties = {
  position: 'fixed', 
  zIndex: 1, 
  // top: 0,
  width:'100%',
  padding: 0 ,
  color: 'blue',
  height: '80px',
  backgroundColor: "white"
};

const contentStyle: CSSProperties = {
  boxSizing: 'border-box',
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#f3f3f3',
  marginTop: '80px',
  // overflowY: 'auto',
};

const navBarStyle: CSSProperties = {
  height: '100vh',
  overflowY: 'auto',
  marginTop: '80px'
}

</script>

<template>
  <a-layout>
      <a-layout-header :style="headerStyle" theme="light">
        <div class="img">
          <img src="@/assets/image/bci_logol.png" style="width: 80%;"/>
        </div>
      </a-layout-header>
      <a-layout >
        <a-layout-sider :style="navBarStyle" theme="light"  v-model:collapsed="collapsed" collapsible>
          <NavBar />
        </a-layout-sider>
        <a-layout-content :style="contentStyle" theme="light">
          <RouterView></RouterView>
          <!-- <a-card :bordered="false" :style="cardStyle">
            
          </a-card> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<style scoped>

.ant-card {
  border-radius: 5px;
  width: 1200px; 
  margin: 20px auto;
}

.img {
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}

</style>
