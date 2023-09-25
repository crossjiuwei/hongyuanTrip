
<script setup>
   import { useRoute,useRouter } from 'vue-router';
   import useHouseInfo from '../../stores/moudles/houseinfo.js'

   import { storeToRefs } from 'pinia';
   import { watch,ref } from 'vue';

   import useStoreCommon from '../../stores/moudles/common';

   import messageinfo from './message-info.vue'
   import slotSection from './slot-section.vue'

   import houseFacilities  from './houseFacilities.vue'
   import houseLandlord from './houseLandlord.vue'
   import houseCommentBrief from './houseCommentBrief.vue'
   import houseNotice from './houseNotice.vue';
   import houseMap from './houseMap.vue';
   import getdata  from '../../services/moudles/house.info.js'

   import houseIntro from '../../views/houseinfo/house-intro.vue'

  const route =  useRoute()
  const router = useRouter()
  const houseInfo =  useHouseInfo()
  const useCommon = useStoreCommon()

 
  houseInfo.gethouseInfo(route.query.houseId)

  getdata(route.query.houseId).then(res=>{
  // console.log(res);

   res.data.mainPart.dynamicModule.positionModule 

   
})

  
 
  const {houseinfo} = storeToRefs(houseInfo) 


 

  const picArray =ref({})
  const houseMain = ref({})
  const dynamicModule = ref({})

  const landlordModule = ref({})
  const commentModule = ref({})

  const rulesModule = ref({})



  let picData = ref({})

 
  

  watch( houseinfo,(newvalue)=>{
   
    dynamicModule.value = newvalue.data?.mainPart?.dynamicModule 
    landlordModule.value = dynamicModule.value?.landlordModule
    commentModule.value = dynamicModule.value?.commentModule
    rulesModule.value = dynamicModule.value?.rulesModule

  

     useCommon.latitude = dynamicModule.value.positionModule.latitude
     useCommon.longitude = dynamicModule.value.positionModule.longitude
       
    houseMain.value =newvalue.data?.mainPart?.topModule
   const housepic=houseMain.value?.housePicture
   
    picData.value = housepic
   for(const key in housepic?.housePics ) {
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

      
      currentIndex.value=key
      // console.log(key);
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
               <van-icon name="arrow-left" />
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
                    <img style="width: 100%;" class="img" :src="value.url" />
                  </van-swipe-item>
               </template>
                  
               <template #indicator="{ active, total } " >
                  <div  class="custom-indicator" >
                     <!-- {{ isactiveFunction(active) }} -->
                        <div  v-for="(item,index) in picArray" class="item" :class="{isactive:currentIndex===index}">

                           <div>
                              {{ item[0].title.replaceAll(/[【】： ]/g,'')  }}
                              <span v-show="currentIndex===index">
                                 {{ isactiveFunction(active) }}/{{item.length }}
                              </span>
                             
                           </div>
                          
                        </div>
                       
              
                     
                    
                  </div>
               </template>
                 
               </van-swipe>
               
           </div>

           <messageinfo :data="houseMain"/>

           <slotSection more1="查看全部设施"  title1="房屋设施">
             <houseFacilities :dynamicModule1="dynamicModule"></houseFacilities>
           </slotSection>


           <slotSection more1="查看房东主页"  title1="房东介绍">            
             <houseLandlord :landlorModule1="landlordModule"></houseLandlord>
           </slotSection>

           <slotSection more1="查看全部37条评论"  title1="热门评论">
              <houseCommentBrief :commentModule1="commentModule"/>
            </slotSection>


            <slotSection more1="预定须知"  title1="预定须知">
              <houseNotice :rulesModule1="rulesModule"/>
            </slotSection>

            <slotSection more1="查看更多周边信息"  title1="位置周边">
              <houseMap/>
            </slotSection>

             
               <houseIntro/>
            
          



        



       </div>
       
       <div class="footer">
         <img class="img" src="../../assets/img/detail/下载.png" alt="">
         <div class="text">弘源旅途, 永无止境!</div>
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
         // height: 11px;
         line-height: 1;
         margin-right: 2px;

         // display: none;

         &.isactive {
            padding:1 4px;
            border-radius: 1.33333vw;
            background-color: #fff;
            color: #333;
            display: block;
         }
      }


     
  }

      .footer {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         height: 32vw;

         .img {
            width: 32.8vw
         }
         .text {
            margin-top: 3.2vw;
            font-size: 3.2vw;
            color: #7688a7;
         }
      }

     

    
</style>