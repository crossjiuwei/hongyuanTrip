
<script setup>
import {useRoute}  from 'vue-router'
let useStore = useRoute()
console.log(useStore);
</script>

<template>

   <h1>收藏</h1>
 
  <div>{{ useStore.query }}</div>
   <div v-for= 'a in 100'>
      我喜欢
   </div>

</template>

<style scoped>

</style>