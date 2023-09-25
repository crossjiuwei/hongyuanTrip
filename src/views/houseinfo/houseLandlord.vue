
<script setup>
     defineProps({
    
      landlorModule1:{
        type:Object,
        default:()=>({})
      }

     })
</script>

<template>

     <div class="intro">

        <div class="top">
         
          <img class="img" :src="landlorModule1.topScroll" alt="">
         

        
        </div>
        <div class="header">
           <div class="left">
            <div class="avatar">
              <img class="img" :src="landlorModule1.hotelLogo" alt="">
            </div>
            <div class="info">
              <div class="name">{{ landlorModule1.hotelName }}</div>
              <div class="tags">
                <template v-for="(value,key) in landlorModule1.hotelTags" :key="key">
                    <div class="item">

                        <span>{{ value.tagText.text }}</span>
                        <span>|</span>

                    </div>
                </template>
              </div>
            </div>
           </div>

           <div class="right">
            <div class="contact">
              联系房东
            </div>
           </div>
        </div>

        <div class="bottom">
           <template v-for="(value,key) in landlorModule1.hotelSummary">
                
              <div class="item">
                  <div class="title">{{ value.title }}</div>
                  <div class="score">{{ value.introduction }}</div>
                  <div class="desc">{{ value.tip }}</div>
              </div>
                
           </template>
        </div>

        <!-- <div>{{ landlorModule1 }}</div> -->
        
     </div>

</template>

<style scoped lang="less">
    .intro {
      
     color: #9B9B9B;

      .top {
       
       .img {
        width: 100%;
        border-radius: 0.8vw;
       }
     }

     .header {
    
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2.66667vw;


      .left {
         
         display: flex;
         .img {
           width: 54px;
           height: 54px;
         }

         .info {
          .name {
            color: #000000;
            margin-top: 2.13333vw;
            font-size: 4.26667vw;
            font-weight: 600;
}
          }
          
          .tags {
            display: flex;
            margin-top: 1.33333vw;
            font-size: 12px;

            & .item:last-child span:last-child {
             color: transparent;
            }

            & .item span:nth-child(2) {

                margin: 0 1.33333vw;
               
            }
          }

         
         }


      .right {

        .contact {
          height: 6.4vw;
          line-height: 6.4vw;
          border-radius: 1.33333vw;
          padding: 0 3.2vw;
          font-size: 3.2vw;
          color: #fff;
          background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);

        }
      }
   }

     .bottom {
        display: flex;
        justify-content: space-between;
        margin: 13.33333vw 2.66667vw 2.66667vw;

        .item {
          font-size: 3.2vw;
          .title {
            color: #999;
          }
          .score {
            margin: 1.33333vw 0;
            font-size: 4.8vw;
            font-weight: 700;
            color: #333;
          }
          .desc {
            color: #666;
          }
        }
     }
}

     

    
    

</style>