import { ref,onMounted } from "vue"
import { throttle } from 'underscore';

export default async function getscroll() {

  let result = ref(false)

  let result1 = ref(false)
  onMounted(()=>{

  
    // const instanceHome=instance.refs.home
    // const instanceWrap = instance.refs.wrap

    // console.log(instanceWrap.offsetHeight-instanceHome.offsetHeight);

  //  添加滚动事件
    
      const setscroll =()=>{

          // console.log(result.value);
        // console.log(result);
        // console.log(1);
         if(document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.offsetHeight){
             
               result.value = true

              

               
         }

       
         if(document.documentElement.scrollTop>=350) {
             
            // console.log(1);
            result1.value = true


             
         }else {

          // console.log(2);
            result1.value =false
          
         }


         
      }
        //  判断页面是否到底   节流减少事件的频繁触发
      window.addEventListener('scroll',throttle(setscroll, 300))

   
})


return {result,result1}

} 