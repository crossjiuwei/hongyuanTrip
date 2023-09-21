import {defineStore}  from 'pinia'
import gethouse from '../../services/moudles/item-innner'

export default defineStore('houselist',{
  state:()=>({
   
     houselist:[],
     couter:1
  }),
  actions:{

   async gethouselist() {


    const res =  await gethouse(this.couter++)
  //  console.log(res);
    this.houselist.push(...res.data) 
    }
  }
})