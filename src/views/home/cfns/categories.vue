
<script setup>

   import useStore  from '../../../stores/moudles/home'
    const store =  useStore()
    store.getCategories()

   //  console.log(store.categories.data);

 
</script>

<template>

    <div class="categories">
          <template v-for="(value,index) in store.categories.data">

            <div class="item">
                <img class="img" :src="value.pictureUrl" alt="">
                <div class="text">{{ value.title }}</div>
            </div>
           
         </template>
    </div>

</template>

<style scoped>

   .categories {
     display: flex;
     overflow-x: auto;
     &::-webkit-scrollbar{
     display:none;
     }
   

     .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 90px;
        height: 80px;
     }
     .text {
        font-size: 12px;
        margin-top: 8px;
     }
     .img {
       width: 32px;
     
     }
   }

</style>
