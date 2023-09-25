
<script setup>
  defineProps({

    more1:{
      type:String,
      default:''
    },
    title1:{
      type:String,
      default:''
    }
  })

</script>

<template>

        <div class="facility">

            <div class="section1">
                <div class="header">
                    <div class="title">{{ title1 }}</div>
                </div>
                <div class="content">
                  <slot></slot>
                </div>


                <div class="footer">
                <span class="more">
                  {{ more1 }}
                  <van-icon name="arrow" />
                </span>
            </div>
            </div>

          
        </div>

</template>

<style scoped lang="less">
       .section1 {

        padding: 0 4vw;
        margin-top: 3.2vw;
        border-top: 1.33333vw solid #f2f3f4;
        background-color: #fff;

        .header {
          width: 100%;
          height: 13.33333vw;
          line-height: 13.33333vw;
          border-bottom: 1px solid #eee;
           
          .title {
            color: #333;
            font-size: 20px;
            font-weight: 700;
            
          }

        }

        .content {


          padding: 1.33333vw 0;

         
        }
        

        .footer {

          display: flex;
          padding-bottom: 13.33333vw;
          justify-content: flex-end;
          align-items: center;
          height: 11.73333vw;
          line-height: 11.73333vw;
          color: #ff9645;
           font-size: 14px;
          font-weight: 600;
          
        }

       }
</style>