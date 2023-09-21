import {createRouter,createWebHashHistory}  from 'vue-router'

export default createRouter({
  history:createWebHashHistory(),
  routes:[
  
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('../views/home/home.vue'),
      meta:{
        disshow:false
      }
    },
    {
      path:'/favor',
      component:()=>import('../views/favor/favor.vue')
    },
    {
      path:"/order",
      component:()=>import('../views/order/order.vue')
    },
    {
      path:"/message",
      component:()=>import('../views/message/message.vue')
    },
    {
      path:'/search',
      component:()=>import('../views/search/search.vue'),
      meta:{
        isactive:true
      }
    },
    {

      path:'/search1',
      component:()=>import('../views/search1/search1.vue'),
      // 传递参数
      query:{
         location:''
         
      }
    },
    {

      path:'/houseinfo',
      component:()=>import('../views/home/cfns/house-info.vue'),
      meta:{
        disshow:true
      }
    }
  ]
})