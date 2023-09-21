
<script setup>

   import {ref} from 'vue'
   import {getDateDiff}  from '../../../utils/date.js'
   import useStoreCommon from '../../../stores/moudles/common.js'


  
 
 const store =  useStoreCommon()

 store.gettime()
 
  let {nowDate,passDate,nowdayjs,passdayjs}=store


   const formatter = (day) => { 
    if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
   }

   let show = ref(false)

   const click =()=>{
   
     show.value = true
     
    
   }
   let stay = getDateDiff(passDate,nowDate,'day')

   const onConfirm = (value1)=>{

     show.value=false
     store.nowDate = value1[0]
     store.passDate = value1[1]
     store.gettime()

     passdayjs = store.passdayjs
     nowdayjs = store.nowdayjs
     
    stay = getDateDiff(value1[1],value1[0],'day')
   }
   
  
   
</script>

<template>

    <div @click="click" class="section line-bottom--color date-range">  
              <div class="start">
                <div class="date">
                    <span class="tip">
                      入住
                    </span>
                    <span class="time">
                    {{ nowdayjs }}
                    </span>
                </div>
                <div class="stay">
                    共{{ stay }}晚
                </div>
              </div>
              <div class="end">
                <div class="date">
                  <span class="tip">
                      离店
                  </span>
                  <span class="time">
                      {{ passdayjs }}
                  </span>

                </div>
                  
              </div>
    </div>
    <van-calendar color="#ff9854" @confirm="onConfirm" v-model:show="show" type="range" :formatter="formatter" />


</template>

<style scoped lang="less">

 

</style>