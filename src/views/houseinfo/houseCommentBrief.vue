
<script setup>
import { watch } from 'vue';
import { ref } from 'vue';

  const props = defineProps({
    
    commentModule1:{
      type:Object,
      default:()=>({})
    }

   })

  const  propsinfo = ref(props)
  let value = ref(0) 
   
 watch(propsinfo.value,(newvalue)=>{
  value.value = newvalue.commentModule1.overall
 }) 

//  console.log(value);

  //  console.log(propsinfo.value.commentModule1);

</script>

<template>

    <!-- <h1>热门评论</h1> -->
     <div class="comment-inner">
        <div class="header">

          <div class="left">
            <div class="score">
              <span class="text">{{ commentModule1.overall }}</span>
              <div class="line"></div>
             
            </div>
            <div class="info">
                <div class="title">
                  {{ commentModule1.scoreTitle }}
                </div>

                <div class="count">
                  {{commentModule1.totalCount }}条评论
                </div>
                 <div class="star">
                  <van-rate size="12px" color="#ff9645" v-model="value" allow-half readonly  />
                 </div>
              </div>
          </div>
          <div class="right">
            <template v-for="(value,key) in commentModule1.subScoresFocus" :key="key">
              <div class="item">{{ value.text }}</div>
            </template>
          </div>
        </div>

        <div class="tags">

          <template v-for="(value,key) in commentModule1.commentTagVo">
             <div :style="{backgroundColor:value.backgroundColor}" class="item">{{ value.text }}</div>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="commentModule1.comment?.userAvatars" alt="">
            </div>
            <div class="profile">
              <div class="name">{{ commentModule1.comment?.userName }}</div>
              <div class="date">{{ commentModule1.comment?.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
            {{ commentModule1.comment?.commentDetail }}
          </div>

          
          <!-- <div>{{ commentModule1}}</div> -->
        </div>
        
     </div>



</template>

<style scoped lang="less">
       .comment-inner {
        padding: 2.66667vw 0;
        .header {

           display: flex;
           .left {
            display: flex;
            align-items: center;
            .score {
              width: 17.33333vw;
              height: 100%;
              color: #333;
              position: relative;
              font-weight: 600;
              .text {

                font-size: 12.8vw;
                position: relative;
                z-index: 9;
              }
              .line {
                width: 17.6vw;
                height: 1.6vw;
                background: linear-gradient(90deg,#fa8c1d,#fcaf3f);
                border-radius: 0.8vw;
                position: absolute;
                bottom: 1.6vw;
                z-index: 5;
              }

            }

            .info {
              margin-left: 5.06667vw;
              font-size: 3.2vw;
              color: #333;

              .count {
                font-size: 12px;
                margin: 0.8vw 0;
                color: #999;

              }
            }


          
           }

        .right {

            display: flex;
            flex-wrap: wrap;
            flex: 1;
            justify-content: flex-end;
            .item {
            margin-left: 1.33333vw;
            font-size: 3.2vw;
            color: #666;

          }
         }
        }


        .tags {

          display: flex;
          margin: 2.66667vw 0;
          flex-wrap: wrap;

          .item {
            padding: 0.8vw 1.33333vw;
            margin-right: 2.13333vw;
            margin-top: 1.33333vw;
            border-radius: 2.13333vw;
            font-size: 3.2vw;

          }
        }

        .content {

          padding: 2.66667vw;
          border-radius: 1.6vw;
            background-color: #f7f9fb;
            .user {
              display: flex;
              .avatar {

                 img {
                  width: 8.53333vw;
                  height: 8.53333vw;
                  border-radius: 50%;
                 }
              }

              .profile {
                font-size: 12px;
                margin-left: 2.13333vw;
              
                .date {
                  margin-top: 0.8vw;
                  font-size: 3.2vw;
                  color: #999;
                }
              }

             
            }

            .text {

            font-size: 3.2vw;
            line-height: 4.26667vw;
            color: #333;
            margin-top: 4.26667vw;
          }
        }
       }
</style>