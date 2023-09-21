
<script setup>

    import { storeToRefs } from 'pinia';
    import useStore  from '../../../stores/moudles/common'
    defineProps({
      getresult:{
        type:Boolean,
        default:true
      }

    })

   const {nowdayjs,passdayjs} = storeToRefs(useStore()) 
  //  console.log(useStore());
  
</script>

<template>
  
   <div v-if="getresult" class="search-bar">

       <div class="search">


          <div class="select-time">

            <div class="item start">
                <div class="name">住</div>
                <div class="date">{{ nowdayjs }}</div>
            </div>

            <div class="item end">
              <div class="name">离</div>
              <div class="li date">{{ passdayjs }}</div>
            </div>


          </div>
          
          <div class="content">
             <div class="keyword">关键字/位置/民宿</div>
          </div>

          <div class="right">
             <i class="icon-search"></i>
          </div>

       </div>

   </div>

</template>

<style scoped lang="less">

    .search-bar {
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      left: 0;
      padding: 4.26667vw 4.26667vw 2.66667vw;
      height: 12vw;
      background-color: #fff;

      .search {
        display: flex;
        flex-direction:row;
        align-items: center;
        height: 12vw;
        font-size: 3.73333vw;
        padding: 0 2.66667vw;
        color: #999;
        border-radius: 1.6vw;
        background:#f2f4f6;

        .content {

          flex: 1;
          height: 12vw;
          line-height: 12vw;
          font-size: 12px;
        
      }
      .right {
        .icon-search {
          position: relative;
          top: 2px;
          width: 24px;
          height: 24px;
          display: inline-block;
          background-image: url(../../../assets/img//home/home-sprite.png);
          background-position: -7.73333vw -40.26667vw;
          background-size: 55.2vw 51.2vw
        }
      }

        .select-time {

          display: flex;
          flex-direction:column ;
          .item {
            display: flex;
            align-items: center;
            font-size: 12px;
            .date {
         
              position: relative;
              color: #333;
              margin: 0 2.66667vw 0 0.8vw;
              font-weight: 500;
            }
           .li::after {
              content: '';
              content: " ";
              width: 0;
              height: 0;
              border: 1.06667vw solid #666;
              border-color: transparent transparent transparent #666;
              -webkit-border-radius: 0.8vw;
              border-radius: 0.8vw;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
              position: absolute;
              bottom: 0;
              right: -3.2vw;


           }
          }
        }
      }

    
    }

</style>