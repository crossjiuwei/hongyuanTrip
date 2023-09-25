
<script setup>

import { watch,ref } from 'vue';



   const props = defineProps({
        dynamicModule1:{
          type:Object,
          default:()=>({})
        }
       })

  const refprops = ref( props )

  // console.log(refprops.value.dynamicModule1);

  const houseFacilitys = ref([])
  
   watch(refprops.value,(newvalue)=>{
    // console.log(1);

    const houseFacility = newvalue?.dynamicModule1?.facilityModule?.houseFacility


   
     
    const houseFacilityKey =  Object.values(houseFacility?.facilitySort)

    // console.log(houseFacilityKey);

     
  
     for (const key of houseFacilityKey) {
          
     houseFacilitys.value.push(houseFacility?.houseFacilitys[key])
     }


    //  console.log(houseFacilitys);



   })
  // console.log(refprops.value?.dynamicModule1);


  // console.log(houseFacilitys);


// // 


</script>

<template>

       <div class="facility-inner">


          <template v-for="(value,key) in houseFacilitys" :key="key">
             <div class="item">
                 <div class="head">
                    <img class="img" :src="value.icon" alt="">
                    <div class="text"> {{ value.groupName }} </div>
                </div>
                 <div class="list">
                  <template v-for="(value1,key1) in value.facilitys">
                      <div  v-if="key1<=3" class="iten">
                        <img style="width: 12px; height: 12px; margin: 0 6px;" src="../../assets/img/detail/icon_check.png"/>
                        <span> {{ value1.name }} </span>
                      </div>
                  </template>
                 </div>
                
             </div>
          </template>

       
       </div> 

</template>

<style scoped>
    .facility-inner {
      padding: 1.33333vw 0;
      border-radius: 1.6vw;
      font-size: 3.2vw;
      background-color: #f7f9fb;
    }

    .item {
      display: flex;
      font-size: 12px;
      /* align-items: center; */
      margin: 6.66667vw 0;
      .head {

        display: flex;
        width: 24vw;
        flex-direction: column;
        align-items: center;
        .text {
          margin-top: 1.33333vw;
        }
        .img {
          width: 5.33333vw;
           height: 5.33333vw;
        }
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        .iten{
          /* width: 50%; */
          align-items: center;
          box-sizing: border-box;
          width: 50%;
          margin: 1.06667vw 0;
        }
      }
    }

</style>
