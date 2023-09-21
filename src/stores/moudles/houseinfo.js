import  {defineStore}  from 'pinia'
import gethouseInfo1 from '../../services/moudles/house.info'

export default defineStore('houseInfo',{

  state:()=>({

      houseinfo:{}
  }),
  actions:{

   async gethouseInfo(index){
      const res  =  await gethouseInfo1(index)
      this.houseinfo =  res
    }
  }
  
})