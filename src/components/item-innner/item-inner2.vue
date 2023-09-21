
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
   value:{
    type:Object,
    default:()=>({})
   }

})
</script>

<template>

    <div v-if="value.discoveryContentType===3" class="house-item item-v3 ">
            <div class="item-inner">
                  <div class="cover">
                      <img class="img" :src="value.data.image.url" alt=""> 
                  </div>
                  <div class="info">
                    <div class="location">
                      <img class="img" style="width: 12px; vertical-align: middle;" src="../../assets/img/home/location.png" alt="">
                      <span style="line-height:25px ;" class="location-text">{{ value.data.location }}</span>
                    </div>
                    <div class="summaryText">
                      {{ value.data.summaryText }}
                    </div>
                    <div class="name overflow">
                      {{ value.data.houseName }}
                    </div>
                    <div class="price">
                      <div class="new">￥{{ value.data.finalPrice }}</div>
                      <div class="old">￥{{ value.data.productPrice }}</div>
                      <div class="tip">已减￥{{ value.data.productPrice-value.data.finalPrice  }}</div>
                      
                    </div>
                  </div>
              </div>

   </div>

</template>

<style scoped>
</style>