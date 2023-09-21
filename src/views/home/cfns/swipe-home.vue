
<script setup>
    const images = [
      'http://123.56.119.83/assets/banner-3d82bd25.png',
      'https://img95.699pic.com/photo/50059/9075.jpg_wh300.jpg',
      'https://img95.699pic.com/photo/50047/8862.jpg_wh300.jpg',
      'https://img95.699pic.com/photo/40250/6711.jpg_wh300.jpg'
    ];

</script>

<template>

    <div class="swipe-home">

        <!-- 懒加载轮播图 -->
        <van-swipe :autoplay="3000" lazy-render indicator-color="#fff
        ">
          <van-swipe-item v-for="image in images" :key="image">
            <img style="height:100%; width: 100%;" :src="image" />
          </van-swipe-item>
        </van-swipe>
    </div>

</template>

<style scoped>
     .swipe-home {
    
        height: 125px;
        .van-swipe {
          height: 100%;
        
        }
        
     }
</style>