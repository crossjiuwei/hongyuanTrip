
<script setup>
    
     import usehoUseStore from '../../../stores/moudles/houselist.js'
     import itemInner1  from '../../../components/item-innner/item-inner1.vue'
     import itemInner2  from '../../../components/item-innner/item-inner2.vue'
    
     import {useRouter}  from 'vue-router'
    
   

  
    const useStore = usehoUseStore()
    
      

    

    
   
    const router = useRouter()


    const click1 = (index)=>{

      router.push({
         path:'/houseinfo',
         query:{
            houseId:index  
         }         
      })

      console.log(index);
      // console.log(1);
    }



   

  // const click = ()=>{

  //   // console.log(useStore.houselist);
  //   useStore.gethouselist()
  // }
     


</script>

<template>


   
    <div class="content">
       <h3 style="height: 40px; line-height: 40px;">热门精选</h3>
      <div  class="houseList">
          <template v-for="(value,index) in useStore.houselist" :key="index">
             <itemInner1 @click="click1(value.data.houseId)" :value="value" />
             <itemInner2 @click="click1(value.data.houseId)" :value="value" />
          </template>
      </div>

      
    
    </div>

    <!-- <button @click="click">加载更多</button> -->
    

</template>

<style scoped>
  

  

</style>