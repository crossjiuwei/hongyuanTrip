
<script setup>
   import useStoreCommon from '../../stores/moudles/common.js'
   const {nowdayjs,passdayjs,nowDate,passDate} = useStoreCommon()

</script>

<template>

     <h1>{{ nowdayjs }}</h1>
     <h1>{{ passdayjs }}</h1>
     <h1>{{ nowDate }}</h1>
     <h1>{{ passDate }}</h1>

</template>

<style scoped>

</style>