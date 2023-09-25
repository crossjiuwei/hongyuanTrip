
<script setup>
   defineProps({
    rulesModule1:{
      type:Object,
      default:()=>({})
    }
   })
</script>

<template>

    <!-- <h1>预定须知</h1> -->

    <div class="notice-inner">
         <template v-for="(value,key) in  rulesModule1.orderRules" :key="key">
          <div class="item">
              <div class="title"> {{ value.title }} </div>
              <div class="intro">{{ value.introduction }}</div>
              <div class="tip" v-if="key===1">查看说明</div>
          </div>
        </template>
    </div>
</template>

<style scoped lang="less">

     .notice-inner {

       .item {
        display: flex;
        margin: 2.66667vw 0 5.33333vw;
        font-size: 3.2vw;
        .title {
          width: 17.06667vw;
          color: #666;
        }
         .intro {
          flex: 1;
          color: #333;
         }
       }
     }

</style>


