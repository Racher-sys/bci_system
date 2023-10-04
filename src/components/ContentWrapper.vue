<template>
    <a-card :bordered="false" :style="cardStyle">
        <slot></slot>
    </a-card>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue';

const cardStyle: CSSProperties = {
  // width: `${window.innerWidth - 260}px`
  width: '95%',
  margin: '20px auto',
  borderRadius: '5px',
};

</script>