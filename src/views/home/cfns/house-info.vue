
<script setup>
   import { useRoute,useRouter } from 'vue-router';
   import useHouseInfo from '../../../stores/moudles/houseinfo'

import { storeToRefs } from 'pinia';
import { watch,ref } from 'vue';


  const route =  useRoute()
  const router = useRouter()
  const houseInfo =  useHouseInfo()
  houseInfo.gethouseInfo(route.query.houseId)

  
 
  const {houseinfo} = storeToRefs(houseInfo) 


 

  const picArray =ref({})

  let picData = ref({})

  watch( houseinfo,(newvalue)=>{
//   console.log(newvalue.data?.mainPart.topModule.housePicture);
   const housepic=newvalue.data?.mainPart.topModule.housePicture
   
    picData.value = housepic
   for(const key in housepic.housePics ) {
     if(!picArray.value[housepic.housePics[key].enumPictureCategory] ) {
      picArray.value[housepic.housePics[key].enumPictureCategory] = []
     }
     
   //   console.log(housepic[key]);
 
     picArray.value[housepic.housePics[key].enumPictureCategory].push(housepic.housePics[key])
   
   }

  })

//   console.log(picData.value.housePics);
 

   // 正则表达式
   const currentIndex = ref(0)
   const isactiveFunction = (index)=>{

   // console.log(picData.value.housePics[index]);

   
   for (const key in picArray.value) {
      const a=  picArray.value[key].findIndex(item=>item== picData.value.housePics[index])

     if(a!==-1) {

      
      currentIndex.value=picArray.value[key].length
    
       return a+1
     }
   
   }



  
   }





  
   const click = ()=>{
     
      router.push({
         path:"/home",
      })
      
   }
   
</script>

<template>

   <!-- <div>{{ picArray }}</div> -->
    <!-- <h1>1</h1> -->
   <div class="houseinfo">
       <div class="nav-bar">
         <div class="van-nav-bar van-hairline--bottom">
            <div class="van-nav-bar__content">
             <div class="van-nav-bar__left" @click="click">
                 <div class="van-icon">&lt;</div>
                 <div class="van-nav-bar__text">旅途</div>
             </div>

             <div class="van-nav-bar__title van-ellipsis">
               房屋详细
             </div>
            </div>
         </div>
         
       </div>


       <div class="main">
            <!-- 轮播图 -->
           <div class="container">
               <van-swipe duration="700" :autoplay="3000" lazy-render>

               <template v-for="(type,key,index) in picArray " :key="key">
                  <van-swipe-item v-for="(value,index) in type">
                    <img class="img" :src="value.url" />
                  </van-swipe-item>
               </template>
                  
               <template #indicator="{ active, total } " >
                  <div  class="custom-indicator" >
                     <!-- {{ isactiveFunction(active) }} -->
                        <div  v-for="(item,index) in picArray" class="item" :class="{isactive:currentIndex===item.length}">

                           <div>
                              {{ item[0].title.replaceAll(/[【】]/g,'')  }}
                              <span>
                                 {{ isactiveFunction(active) }}/{{item.length }}
                              </span>
                             
                           </div>
                          
                        </div>
                       
              
                     
                    
                  </div>
               </template>
                 
               </van-swipe>
               
           </div>
       </div>
      

   </div>

</template>

<style scoped lang="less">
      .nav-bar {
        
         height: 40px;
         line-height: 40px;
         .van-nav-bar__content {
            text-align: center;
            display: flex;
            color: var(--main-bg-color);
            font-size: 16px;

            .van-nav-bar__left {
               position: absolute; 
               display: flex;
               width: 80px;
               font-size: 14px;
               align-items: center;
               justify-content: center;

            }
            .van-nav-bar__title {

               // flex: 1;
               margin-right: 60px;
               margin: 0 auto;
            }
         }

      }

      .van-swipe {
        .img {
         height: 250px;
        }
      }



      .custom-indicator {
         display: flex;
         position: absolute;
         right: 5px;
         bottom: 5px;
         padding: 2px 5px;
         font-size: 12px;
         background: rgba(0, 0, 0, 0.1);

      .item {
         display: flex;
         color: #fff;
         line-height: 1;
         display: none;

         &.isactive {
            padding: 2px;
            border-radius: 1.33333vw;
            background-color: #fff;
            color: #333;
            display: block;
         }
      }


     
  }

     

    
</style>