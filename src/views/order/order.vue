
<script setup>
   import {useRoute}  from 'vue-router'
</script>

<template>

   <h1>{{ useRoute().query }}</h1>

</template>

<style scoped>

</style>