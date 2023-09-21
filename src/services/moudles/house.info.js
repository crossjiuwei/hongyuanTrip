import gethouseInfo1  from '../index'

export default function gethouseInfo(index) {

  return gethouseInfo1.get({
     url:'detail/infos',
    params:{
      houseId:index
    }
   })
}