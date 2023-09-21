
<script setup>
    import { ref } from 'vue';
    import searchbar  from './cfns/search-bar.vue'
    import useStore  from '../../stores/moudles/search.js'
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';
    import {useRouter} from 'vue-router'


 
 
   const store =  useStore()
   store.getcity()
    // console.log(store);

   let {getcity,cityData,citylocation} = storeToRefs(store)
  
  

   
    const activeName = ref('cityGroup');
    const router = useRouter()

    const click = (item)=>{
        // console.log(index);

    // 第一个方法 将其放到store的库当中
          
        store.citylocation = item

        // console.log(citylocation);
        router.back()
    // 第二个方法使用事件总线

    }

   
 


   
     
  

   
    




   
</script>

<template>



<div class='search1'>
    <div class="top">
     <searchbar/>
     <van-tabs  v-model:active="activeName">
        <template v-for="(value,key,index) in cityData.data" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
    </van-tabs>
</div>


<van-index-bar>
  


 
</van-index-bar>
    <div class="city-group">

        <template v-for="(value,key,index) in cityData.data" :key="key">

             <div v-show="activeName===key">
                <van-index-bar  :index-list="value.cities.map((item)=>item.group)">
                    <div class="hotmen">热门 </div>
                    <div class="hot">

                        <template v-for="(value,key,index) in value.hotCities">
                           <div @click="click(value)"> {{ value.cityName }} </div>
                       </template>

                    </div>
                  

                    
                    <template v-for="(item,index) in value.cities " :key="index">
                       <van-index-anchor :index="item.group" />
                       <!-- 双层循环 -->
                        <template v-for="(iten,index1) in item.cities" :key="index1">
                            <van-cell @click="click(iten)" :title="iten.cityName" />
                        </template>
                
                   </template>
  
                </van-index-bar>
            
            </div>


        </template>
    </div>
</div>
   

  


</template>

<style scoped  lang="less">


.search1{
    
    height: 100vh;
    .top {
        position: relative;
        z-index: 11;
    }
    .city-group {
        position: relative;
        z-index: 10;
        height:calc(100% - 98px);
        overflow-y: auto;
        background-color: #fff;
        .hotmen {
            padding-left:10px ;
        }
        .hot {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 28px;
            font-size: 12px;
            color: #000;
            div {
                width: 70px;
                height: 28px;
                margin: 10px 10px;
                border-radius: 3.73333vw;
                background-color:#fff4ec ;
            }
        }
    }
}

.van-tabs--line {
    --line-height:30px
    :deep(.van-tabs__wrap) {
    height: var(--line-height);
    color: var(--van-tabs-bottom-bar-color);
  }
}

:deep(.van-tabs__line) {
    background-color: var(--main-bg-color);
}



  
</style>