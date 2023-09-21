import {defineStore}  from 'pinia'
import  {getHotSuggest,getCategorie}  from '../../services/moudles/home'


export default defineStore('home',{

  state:()=>({

    hotSuggests:{},
    categories:{}

  }),
  actions:{

   async gethotSuggests() {

   const hotdata =  await getHotSuggest()

       this.hotSuggests  =  hotdata
      
    },

    async getCategories() {

    const hotdata = await getCategorie() 
    this.categories = hotdata
    }


  }
})