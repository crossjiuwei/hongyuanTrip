import search  from '../index'

function getcity() {

 return search.get({
    url:'city/all'
  })

}

export default getcity

