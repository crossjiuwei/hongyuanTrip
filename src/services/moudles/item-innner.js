
import gethouse from "../index";
function gethouselist(couter) {

   return gethouse.get({
      url:'home/houselist',
      params:{
        page:couter
      }
    }) 

}


export default gethouselist