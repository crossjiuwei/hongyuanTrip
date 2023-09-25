
<script setup>
     
    
     const props= defineProps({
        data:{
          type:Object,
          default:()=>({})
        }
      })

      // console.log(props);
      
     
</script>

<template>

      <div class="infos">

           <div class="name">
                {{ data.houseName }}
           </div>

           <div class="tags">
               <template v-for="(value,key) in  data.houseTags" :key="key">
                  <span :style="{color:value?.tagText.color,backgroundColor:value?.tagText.background.color}" v-if="value.tagText" class="item">{{ value.tagText?.text }}</span>
              </template>
               
              
           </div>

           <div class="comment">
            
               <div class="left">
                   <div class="score">{{ data.commentBrief?.overall }}</div>
                   <div class="title">{{ data.commentBrief?.scoreTitle }}</div>
                   <div class="brief">{{ data.commentBrief?.commentBrief }}</div>
               </div>

               <div class="right">

                <div class="count">{{ data.commentBrief?.totalCount }}条评论</div>
                <van-icon name="arrow" />
               </div>
           </div>


           <div class="comment">
            
            <div style="color: #333; font-size: 14px; font-weight: 700;" class="left">
                 {{ data?.nearByPosition?.address }}
            </div>

            <div class="right">

             <div class="count"> 地图.周边</div>
             <van-icon name="arrow" />
            </div>
        </div>


          
      </div>

     

</template>

<style scoped>


      .infos {

        padding: 4.26667vw;
        .name {
          font-weight: 700;
          font-size: 5.33333vw;
          color: #333;
          text-align: justify;
          line-height: 6.4vw;
          overflow: hidden;
          margin-bottom: 1.6vw;
        }

        .tags {
          .item {
            font-size: 3.2vw;
            margin: 0 0.53333vw;
            padding: 1px 0.8vw;
          }
        }

        .comment {

          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f5f7fa;
          padding: 2.13333vw 3.2vw;
          margin: 3.2vw 0;
          border-radius: 1.33333vw;

          .left {
            display: flex;
            color: #333;
            font-size: 12px;
            align-items: center;
            /* line-height: 20px; */
            .score {
              font-size:18px;
              font-weight: 700;
             
            }

            .title {

              font-weight: 700;
              margin: 0 3px;
              
            }
            .brief {
              color: #666;
            }


          }

          .right {
            display: flex;
            font-size: 12px;
            color: var(--main-bg-color);
          }
        } 

      }

</style>