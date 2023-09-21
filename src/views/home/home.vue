
<script setup>
    import navBarTop  from './cfns/nav-bar-top.vue'
    import swipeHome  from './cfns/swipe-home.vue'
    import locationHome from '../home/cfns/location-home.vue'
    import dateRange  from '../home/cfns/date-range.vue'
    import  useStore  from '../../stores/moudles/home.js'
    import { storeToRefs } from 'pinia'
    import categories from '../../views/home/cfns/categories.vue'
    import  {useRouter}  from 'vue-router'
    import content from '../home/cfns/conent.vue' 


    import usehoUseStore from '../../stores/moudles/houselist'
    import getScrollresult from '../../hooks/scroll'

    import { watch,ref } from 'vue'

    import searchBar  from '../home/cfns/search-bar.vue'
   


    



    const useHouseStore = usehoUseStore()
     const stores = useStore()
     const router = useRouter()

     stores.gethotSuggests()

     const { hotSuggests }  = storeToRefs(stores) 

    //  console.log(hotSuggests);


     const searchbtn = ()=>{
         router.push({

          path:'/search1',
         })
     }


    // const instance =  getCurrentInstance()
    


    // onMounted(()=>{


      // console.log(instanceWrap.offsetHeight-instanceHome.offsetHeight);

    //  添加滚动事件

      // const setscroll = ()=>{
      //   // console.log(instanceWrap.offsetHeight-instanceHome.scrollTop,instanceHome.offsetHeight-51);
      //   if() {
      //     useHouseStore.gethouselist()
      //   }
      // }

    // const setscroll =()=>{
    //      if(document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.offsetHeight){
    //            useHouseStore.gethouselist()
    //      }
    // }
    //     //  判断页面是否到底
    //   window.addEventListener('scroll',setscroll)
    // })


 let getresult = ref(false)
 getScrollresult().then(res=>{
// console.log(res.result);



  watch(res.result,(newvalue)=>{

    if(newvalue) {
      useHouseStore.gethouselist()

      res.result.value=false
      
      }

  })

  watch(res.result1,(newvalue)=>{

    // console.log(newvalue);
    getresult.value = newvalue
  })

  

 
//   watch(res.result1,(newvalue)=>{
//     if(newvalue) {
// console.log(1);
//     console.log(newvalue);
//     getresult.value = newvalue

   



//     }
//   })
  
 })

 

    // console.log(a);



    

     

     

     


     
    
</script>

<template>

  
 
   <div  class='home'>
    <div class="wrap" >

   
    <navBarTop/>
    <swipeHome/>
    <div class="search-box">

      <locationHome/>
      
   
      <dateRange/>
   
     


      
      <div class="section line-bottom--color price-counter">  
              <div class="start">
                   价格不限
              </div>
              <div class="end">
                 人数不限
                </div>
                             
    </div>

    <div class="section line-bottom--color keyword  ">  
            关键字/位置/民宿名  
    </div>

    <div class="hot-suggests">
      
       <template v-for="(value,index) in hotSuggests.data" :key="index">
            
        <div class="item"> {{ value.tagText.text }} </div>
      
      </template>

    </div>

     <div class="section search-btn">
         <div @click="searchbtn" class="btn">开始搜索</div>
     </div>
   
    </div>

    <categories/>

    <searchBar :getresult='getresult'/>



    <content/>
    

  

    
   </div>
  
  </div>

    



</template>

<style scoped>
   .home {
    position: relative;
    /* z-index: ; */
    /* height: 100vh; */
    overflow-y: auto;
    padding-bottom: 51px;
    /* background-color: #fff; */


    .price-counter {
      font-size: 14px;
      .start,.end {
        color:#999 ;

      }     
    }

    .hot-suggests {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px;
      margin: 10px 0;

      .item {
        font-size: 3.2vw;
        border-radius:3.73333vw;
        margin:1.06667vw;
        padding:1.06667vw 2.13333vw;
        background-color: rgb(241, 243, 245);
        color: rgb(63, 73, 84);
        line-height: 1;
      }
     }



     /* 搜索按钮 */
     .search-btn {
     
       
      .btn {
        width: 335px;
        height: 37px;
        border-radius:5.33333vw;
        background-image:var(--theme-liner-gradient);
        margin: 0 auto;
        text-align: center;
        line-height: 37px;
        font-size: 18px;
        color:#fff;

      }
      
     } 


   }
  
</style>