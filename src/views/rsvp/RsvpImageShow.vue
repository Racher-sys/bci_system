<template>
    <div>
        <div>
            <img :src="images[imageIndex]" draggable="true"/>
        </div>
        <a-button @click="handleStart">开始</a-button>
        <a-button @click="handleStop">暂停</a-button>
    </div>
</template>
<script setup lang="ts">
import { ref} from 'vue';
const images = ['src/assets/image/1.jpg', 'src/assets/image/2.jpg', 'src/assets/image/3.jpg',
                 'src/assets/image/4.jpg', 'src/assets/image/5.jpg', 'src/assets/image/6.jpg',
                 'src/assets/image/7.jpg', 'src/assets/image/8.jpg', 'src/assets/image/9.jpg',
                  'src/assets/image/11.jpg', 'src/assets/image/12.jpg', 'src/assets/image/13.jpg']

const imageIndex = ref(0);

var timeInterval: any;

function handleStart() {
    clearInterval(timeInterval);
    timeInterval = setInterval(()=> {
    imageIndex.value = (imageIndex.value + 1) % images.length;
    console.log(images[imageIndex.value]);
}, 1000);
}
function handleStop(){
    clearInterval(timeInterval);
}

</script>

<style scoped>
img{
    width: 400px;
    height: 400px;
}
</style>