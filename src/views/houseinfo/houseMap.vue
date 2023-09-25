
<script setup>


  import { ref,onMounted } from 'vue';

  import useStoreCommon from '../../stores/moudles/common.js';
  import { storeToRefs } from 'pinia';
  import { watchEffect,onUpdated } from 'vue';




 const useCommon = useStoreCommon()
 const {latitude,longitude} =storeToRefs(useCommon)
 const housemap = ref()
  onMounted(()=>{

    console.log(housemap.value);

    watchEffect(()=>{

      // console.log(1);

     
      // console.log(latitude.value,longitude.value);
    if(latitude.value&&longitude.value) {
      const map = new BMapGL.Map(housemap.value);          // 创建地图实例 
      const point = new BMapGL.Point(longitude.value,latitude.value);  // 创建点坐标 
      map.centerAndZoom(point, 15);   
      const marker = new BMapGL.Marker(point);  // 创建标注   
      map.enableScrollWheelZoom(true);      
      map.addOverlay(marker);       


    }

 
      
    })
  })


  onUpdated(()=>{


    console.log(housemap.value);
  })


 



   
   
    
   

    
  
</script>

<template>

 
 
  <div ref="housemap" class="housemap" style="height: 260px;">
   
  </div>

</template>

<style scoped>

</style>