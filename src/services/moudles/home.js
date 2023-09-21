import home from '../index'




export function getHotSuggest() {


  return home.get({
    url:'home/hotSuggests'
  })
}


export function getCategorie() {

     
  return home.get({

    url:'home/categories'
  })
}