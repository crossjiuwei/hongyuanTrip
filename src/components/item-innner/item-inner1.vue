
<script setup>

import { defineProps,ref } from 'vue';

const props = defineProps({
   value:{
    type:Object,
    default:()=>({})
   }

})
// console.log(props.value.data.commentScore);

let num = ref(Number(props.value.data.commentScore))









</script>

<template>

      <div v-if="value.discoveryContentType===9" class="house-item item-v9">
              <div class="item-inner">
                  <div class="cover">
                      <img class="img" :src="value.data.image.url" alt=""> 
                  </div>
                  <div class="info">
                    <div class="summaryText">
                      {{ value.data.summaryText }}
                    </div>
                    <div class="name overflow">
                      {{ value.data.houseName }}
                    </div>
                    <div class="price">
                      <div class="radiogroup">
                        <van-rate 
                        :size="15"
                        color="#fff"
                        :modelValue="num"
                        readonly 
                        allow-half 
                        />

                      </div>
                      <div>￥{{ value.data.finalPrice }} </div>
                    
                    </div>
                  </div>
              </div>

      </div>

</template>

<style scoped>

</style>