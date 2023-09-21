
<script setup>

    import {useRouter}  from 'vue-router'
    import useStore   from '../../../stores/moudles/search'
    import { storeToRefs } from 'pinia';

   const router = useRouter()
    const click = ()=>{
      router.push('/search')
    }

    const store = useStore()

    const {citylocation} = storeToRefs(store)

</script>

<template>
     
     <div class="location">
        <div class="city" @click="click">{{ citylocation.cityName }}</div>
        <div class="position">
          <span class="text">我的位置</span>
          <img style="height: 20px;" class="img" src="../../../assets/img/home/icon_location.png" alt="">
        </div>
      </div>


</template>

<style scoped lang="less">

.search-box {
        .location {
          display: flex;
          height: 45px;
          line-height: 45px;
          margin:5.33333vw ;
          .city {
            flex: 1;
          }
          .position {
            display: flex;
            width: 85px;
            justify-content: space-between;
            align-items: center;

            .img {
              position: relative;
              top: -1px;
            
            }
            .text {
              font-size: 14px;

            }
          }
        }
      }

</style>