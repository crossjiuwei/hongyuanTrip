import {defineStore}  from 'pinia'
import getcity1  from '../../services/moudles/search'

export default defineStore('search',{
  state:()=>({
    cityData:{},
    citylocation:{
      cityName:'上海'
    }

  }),

  actions:{
    getcity() {
       getcity1().then(res=>{
        this.cityData =res
        // this.citylocation = res
      })
    }
  }
})