<template>
    <div class="action">
        <a-button style="margin-bottom: 5px;" >暂停</a-button>
        <a-button >退出</a-button>
    </div>
    
    <div class="body">
        <div class="wave">
            <a-card class="wavecard" >
         <template #title>
            <span class="title">
                EEG Wave
            </span>
         </template>
        </a-card>
        <a-card class="wavecard" >
          <template #title>
            <span class="title">
                EYE wave
            </span>
          </template>
        </a-card>
        </div>

        <div class="result">
            <a-card class="resultCard"  >
          <template #title>
            <span class="title">
                Result
            </span>
          </template>
        </a-card>
        </div>
    </div>
   
</template>

<script setup lang="ts">


</script>

<style scoped>
.body {
    width: 92%;
    margin: 40px auto;
    margin-left: 6em;
    /* background-color: rgba(208, 208, 208, 0.2); */
    
}

.action {
    display: flex;
    flex-direction: column;
    float: left; 
    margin-right: 10px;
    width: 5em;
} 

.wave {
    display: flex;
    justify-content: space-between;
}

.wavecard {
    width: 49%;
    height: 200px;
}

.result {
    width: 100%;
    margin-top: 10px;
}

.resultCard {
    height: 400px;
}
</style>