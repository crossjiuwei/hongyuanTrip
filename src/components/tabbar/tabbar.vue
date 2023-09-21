
<script setup>

    import {data} from '../../assets/data/index'
    import {ref} from 'vue'
    import {useRouter,useRoute}  from 'vue-router'
    



    function getimgurl(img) {
        return new URL(`../../${img}`,import.meta.url).href
    }


    const curentindex = ref(0)

    const route = useRoute()
    const router =  useRouter()

    // console.log(router.query.index);
 
    const click = (index)=>{
        
        curentindex.value = index
         router.push({
          path:data[index].path,
    
         })



    }

   

</script>

<template>

   
    
    <div v-show="!route.meta.disshow" class="tabbar">
       
        <template v-for="(value,index) in data" :key="index">

            <div class="bar-item" @click="click(index)">
                <template v-if="index===curentindex">
                    <img :src="getimgurl(value['icon-active-img'])"  alt="">
                </template>
                <template v-else>
                    <img :src="getimgurl(value['icon-img'])"  alt="">
                </template>
                <span :class="{isactive:index===curentindex}">{{ value['icon-name'] }}</span>
                <!-- <span>{{ value['icon-name'] }}</span> -->
               
            </div>
             
        </template>

    </div>

</template>

<style scoped lang="less">
     .tabbar {
        position: fixed;
        // z-index: 4;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        height: 50px;
        // line-height: 50px;
        text-align: center;
        font-size: 14px;
        border-top: 1px solid #f5f5f5;
        background-color: #fff;
        .bar-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span {
          
              
            }
            img {
                width: 25px;
                
            }

        }

       
     }
     .isactive {
       color:var(--main-bg-color)
     }
</style>